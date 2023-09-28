<?php

namespace App\Http\Controllers;

use App\Http\Requests\FeedRequest;
use App\Http\Requests\UserFeedRequest;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use App\Services\FeedService;
use Illuminate\Http\JsonResponse;

class FeedController extends Controller
{
    public function __construct(
        private readonly FeedService $feedService
    ) {}

    public function getPopularPosts (FeedRequest $request): JsonResponse
    {
        $posts = $this->feedService->getPopularPosts(
            offset: $request->get('offset'),
            limit: $request->get('limit')
        );

        return response()->json(['success' => true, 'data' => $posts]);
    }

    public function getUserPosts (FeedRequest $request, User $user): JsonResponse
    {
        $posts = $this->feedService->getUserPosts(
            user: $user,
            offset: $request->get('offset'),
            limit: $request->get('limit')
        );

        return response()->json([
            'success' => true,
            'data' => $posts
        ]);
    }

    public function getSavedPosts (FeedRequest $request): JsonResponse
    {
        $result = $this->feedService->getSavedPosts(
            offset: $request->get('offset'),
            limit: $request->get('limit')
        );

        return response()->json([
            'success' => true,
            'data' => $result
        ]);
    }

    public function getPostLikers (UserFeedRequest $request, Post $post): JsonResponse
    {
        $result = $this->feedService->getPostLikers(
            post: $post,
            offset: $request->get('offset'),
            limit: $request->get('limit')
        );

        return response()->json([
            'success' => true,
            'data' => $result
        ]);
    }

    public function getUserFollowers (UserFeedRequest $request, User $user): JsonResponse
    {
        $result = $this->feedService->getUserFollowers(
            user: $user,
            offset: $request->get('offset'),
            limit: $request->get('limit')
        );

        return response()->json([
            'success' => true,
            'data' => $result
        ]);
    }

    public function getUserFollows (UserFeedRequest $request, User $user): JsonResponse
    {
        $result = $this->feedService->getUserFollows(
            user: $user,
            offset: $request->get('offset'),
            limit: $request->get('limit')
        );

        return response()->json([
            'success' => true,
            'data' => $result
        ]);
    }

    public function getTagPosts (FeedRequest $request, Tag $tag): JsonResponse
    {
        $result = $this->feedService->getTagPosts(
            tag: $tag,
            offset: $request->get('offset'),
            limit: $request->get('limit')
        );

        return response()->json([
            'success' => true,
            'data' => $result
        ]);
    }
}
