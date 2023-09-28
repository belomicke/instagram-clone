<?php

namespace App\Services;

use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Builder;

class FeedService
{
    public function getPopularPosts (int $offset, int $limit): array
    {
        $currentUser = auth('sanctum')->user();
        $ids = array_column($currentUser->follows->toArray(), 'id');
        $ids[] = $currentUser->id;
        $posts = Post::query()->with(['media', 'author'])->whereIn('user_id', $ids)->orderBy('id', 'desc');

        return $this->getResponse(
            items: $posts,
            offset: $offset,
            limit: $limit,
        );
    }

    public function getUserPosts (User $user, int $offset, int $limit): array
    {
        return $this->getResponse(
            items: $user->posts()->with(['media', 'author'])->orderBy('id', 'desc'),
            offset: $offset,
            limit: $limit,
        );
    }

    public function getSavedPosts (int $offset, int $limit): array
    {
        $user = auth('sanctum')->user();

        return $this->getResponse(
            items: $user->saved_posts()->with(['media', 'author'])->orderByPivot('id', 'desc'),
            offset: $offset,
            limit: $limit,
        );
    }

    public function getPostLikers (Post $post, int $offset, int $limit): array
    {
        return $this->getResponse(
            items: $post->likers()->orderBy('id', 'desc'),
            offset: $offset,
            limit: $limit,
        );
    }

    public function getUserFollowers (User $user, int $offset, int $limit): array
    {
        return $this->getResponse(
            items: $user->followers()->orderByPivot('id', 'desc'),
            offset: $offset,
            limit: $limit,
        );
    }

    public function getUserFollows (User $user, int $offset, int $limit): array
    {
        return $this->getResponse(
            items: $user->follows()->orderByPivot('id', 'desc'),
            offset: $offset,
            limit: $limit,
        );
    }

    public function getTagPosts (Tag $tag, int $offset, int $limit): array
    {
        return $this->getResponse(
            items: $tag->posts()->with(['media', 'author'])->orderBy('like_count', 'desc'),
            offset: $offset,
            limit: $limit,
        );
    }

    private function getResponse (BelongsToMany|HasMany|Collection|Builder $items, int $offset, int $limit): array
    {
        $total = $items->count();
        $items = $items->skip($offset)->take($limit)->get();
        $hasNextPage = $offset + $limit < $total;

        return [
            'result' => $items,
            'total' => $total,
            'hasNextPage' => $hasNextPage
        ];
    }
}
