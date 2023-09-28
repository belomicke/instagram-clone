<?php

namespace App\Services;

use App\Models\Tag;
use App\Models\Post;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class TagService
{
    public function getOrCreate (string $tagName): Model|Builder|Tag|null
    {
        $tag = Tag::query()->where('tag', $tagName)->firstOrCreate([
            'tag' => $tagName,
        ]);

        $tag->save();

        return $tag;
    }

    public function attachPost (Post $post, string $tagName): void
    {
        $tag = $this->getOrCreate(
            tagName: $tagName
        );

        $post->tags()->attach($tag);

        $tag->post_count++;
        $tag->save();
    }

    public function detachPost (Post $post, string $tagName): void
    {
        $tag = $this->getOrCreate(
            tagName: $tagName
        );

        $post->tags()->detach($tag);

        if ($tag->post_count - 1 === 0) {
            $tag->delete();
        } else {
            $tag->post_count--;
            $tag->save();
        }
    }
}
