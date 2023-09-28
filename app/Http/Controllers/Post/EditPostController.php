<?php

namespace App\Http\Controllers\Post;

use App\Helpers\PostHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\EditPostRequest;
use App\Models\Post;
use App\Services\PostService;
use Illuminate\Http\JsonResponse;

class EditPostController extends Controller
{
    public function __construct (
        private readonly PostService $postService,
    ) {}

    public function __invoke(EditPostRequest $request, Post $post): JsonResponse
    {
        $prevDescription = $post->description ?? '';
        $newDescription = $request->input('description') ?? '';

        $status = $this->postService->edit(
            post: $post,
            description: $newDescription
        );

        $prevTags = PostHelpers::getTagsFromDescription($prevDescription);
        $newTags = PostHelpers::getTagsFromDescription($newDescription);

        $removedTags = array_diff($prevTags, $newTags);
        $addedTags = array_diff($newTags, $prevTags);

        $this->postService->detachTags(
            post: $post,
            tags: $removedTags
        );

        $this->postService->attachTags(
            post: $post,
            tags: $addedTags
        );

        return response()->json(['success' => $status]);
    }
}
