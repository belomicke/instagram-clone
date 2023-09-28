<?php

namespace App\Services;

use App\Models\Post;

class PostService
{
    public function __construct(
        private readonly TagService $tagService
    ) {}

    public function create (string $description, bool $likeCountIsHidden): Post
    {
        $post = Post::create([
            'description' => $description,
            'like_count_is_hidden' => $likeCountIsHidden == 'true',
        ]);

        return $post->fresh();
    }

    public function delete (Post $post): bool
    {
        if ($post->author->id !== auth('sanctum')->id()) {
            return false;
        }

        $post->delete();

        return true;
    }

    public function edit (Post $post, string $description): bool
    {
        if ($post->author->id !== auth('sanctum')->id()) {
            return false;
        }

        $post->description = $description;
        $post->save();

        return true;
    }

    public function likePost (Post $post): bool
    {
        $user = auth('sanctum')->user();

        if ($post->likers->contains($user)) {
            return false;
        }

        $post->likers()->attach($user);
        $post->like_count += 1;

        $post->save();

        return true;
    }

    public function unlikePost (Post $post): bool
    {
        $user = auth('sanctum')->user();

        if (!$post->likers->contains($user)) {
            return false;
        }

        $post->likers()->detach($user);
        $post->like_count -= 1;

        $post->save();

        return true;
    }

    public function addToSaved (Post $post): bool
    {
        $user = auth('sanctum')->user();

        if ($post->savers->contains($user)) {
            return false;
        }

        $post->savers()->attach($user);

        return true;
    }

    public function removeFromSaved (Post $post): bool
    {
        $user = auth('sanctum')->user();

        if (!$post->savers->contains($user)) {
            return false;
        }

        $post->savers()->detach($user);

        return true;
    }

    public function hideLikeCount (Post $post): bool
    {
        if ($post->author->id !== auth('sanctum')->id()) {
            return false;
        }

        $post->like_count_is_hidden = true;
        $post->save();

        return true;
    }

    public function showLikeCount (Post $post): bool
    {
        if ($post->author->id !== auth('sanctum')->id()) {
            return false;
        }

        $post->like_count_is_hidden = false;
        $post->save();

        return true;
    }

    public function attachTags (Post $post, array $tags): void
    {
        foreach ($tags as $tagName) {
            $this->tagService->attachPost(
                post: $post,
                tagName: $tagName
            );
        }
    }

    public function detachTags (Post $post, array $tags): void
    {
        foreach ($tags as $tagName) {
            $this->tagService->detachPost(
                post: $post,
                tagName: $tagName
            );
        }
    }
}
