<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Services\PostService;
use Illuminate\Http\JsonResponse;

class PostController extends Controller
{
    public function __construct (
        private readonly PostService $postService,
    ) {}

    public function getPost (Post $post): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $post->load('author', 'media')
        ]);
    }

    public function likePost (Post $post): JsonResponse
    {
        $success = $this->postService->likePost(
            post: $post
        );

        return response()->json(['success' => $success]);
    }

    public function unlikePost (Post $post): JsonResponse
    {
        $success = $this->postService->unlikePost(
            post: $post
        );

        return response()->json(['success' => $success]);
    }

    public function addToSaved (Post $post): JsonResponse
    {
        $success = $this->postService->addToSaved(
            post: $post
        );

        return response()->json(['success' => $success]);
    }

    public function removeFromSaved (Post $post): JsonResponse
    {
        $success = $this->postService->removeFromSaved(
            post: $post
        );

        return response()->json(['success' => $success]);
    }

    public function hideLikeCount (Post $post): JsonResponse
    {
        $status = $this->postService->hideLikeCount(
            post: $post
        );

        return response()->json(['success' => $status]);
    }

    public function showLikeCount (Post $post): JsonResponse
    {
        $status = $this->postService->showLikeCount(
            post: $post
        );

        return response()->json(['success' => $status]);
    }
}
