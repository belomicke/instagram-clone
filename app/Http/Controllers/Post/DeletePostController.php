<?php

namespace App\Http\Controllers\Post;

use App\Helpers\PostHelpers;
use App\Http\Controllers\Controller;

use App\Models\Post;
use App\Services\AuthService;
use App\Services\PostService;
use Illuminate\Http\JsonResponse;

class DeletePostController extends Controller
{
    public function __construct (
        private readonly PostService $postService,
        private readonly AuthService $authService,
    ) {}

    public function __invoke(Post $post): JsonResponse
    {
        $tags = PostHelpers::getTagsFromDescription($post->description);

        $this->postService->detachTags(
            post: $post,
            tags: $tags
        );

        $status = $this->postService->delete(
            post: $post
        );

        if ($status) {
            $this->authService->decrementPostCount();
        }

        return response()->json(['success' => $status]);
    }
}
