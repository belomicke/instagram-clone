<?php

namespace App\Http\Controllers\Post;

use App\Helpers\PostHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePostRequest;
use App\Services\AuthService;
use App\Services\ImageService;
use App\Services\PostService;
use Illuminate\Http\JsonResponse;

class CreatePostController extends Controller
{
    public function __construct (
        private readonly PostService $postService,
        private readonly ImageService $imageService,
        private readonly AuthService $authService
    ) {}

    public function __invoke(CreatePostRequest $request): JsonResponse
    {
        $description = $request->input('description') ?? '';
        $images = $request->file('images');
        $likeCountIsHidden = $request->input('like_count_is_hidden') === 'true' ?? false;

        $createdPost = $this->postService->create(
            description: $description,
            likeCountIsHidden: $likeCountIsHidden
        );

        foreach ($images as $image) {
            $this->imageService->createImage($image, $createdPost->id);
        }

        $tags = PostHelpers::getTagsFromDescription($description);

        $this->postService->attachTags(
            post: $createdPost,
            tags: $tags
        );

        $this->authService->incrementPostCount();

        return response()->json([
            'success' => true,
            'data' => $createdPost->load('author', 'media')
        ]);
    }
}
