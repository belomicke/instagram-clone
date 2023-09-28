<?php

namespace Database\Seeders;

use App\Models\Tag;
use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = Tag::all();
        $entities = [];

        foreach ($tags as $tag) {
            $tagName = $tag->tag;

            $posts = Post::query()
                ->where('description', 'like', '% #' . $tagName . ' %')
                ->orWhere('description', 'like', '% #' . $tagName)
                ->get();

            foreach ($posts as $post) {
                $entities[] = [
                    'post_id' => $post->id,
                    'tag_id' => $tag->id
                ];

                if (count($entities) === 10000) {
                    DB::table("post_tag")->insert($entities);
                    $entities = [];
                }
            }
        }

        DB::table("post_tag")->insert($entities);
    }
}
