<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = Post::all();
        $tags = [];

        foreach ($posts as $post) {
            $description = $post->description;

            $tagsFromDescription = array_filter(explode(' ', $description), function ($value) {
                return ($value[0] === '#');
            });

            $tagsWithoutSharp = array_map(function ($item) {
                return substr($item, 1, strlen($item));
            }, $tagsFromDescription);

            foreach ($tagsWithoutSharp as $tagName) {
                $tagInArray = in_array($tagName, array_column($tags, 'tag'));

                if (!$tagInArray) {
                    $tags[] = [
                        'id' => Str::ulid()->toBase32(),
                        'tag' => $tagName,
                    ];
                }
            }
        }

        DB::table('tags')->insert($tags);
    }
}
