<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImageSeeder extends Seeder
{
    public function run(): void
    {
        $posts = Post::all();
        $images = [];

        foreach ($posts as $post) {
            $width = fake()->numberBetween(640, 2000);
            $height = fake()->numberBetween(480, 2000);

            for ($i = 0; $i < $post->media_count; $i++) {
                $image = fake()->imageUrl($width, $height);

                $images[] = [
                    'path' => $image,
                    'url' => $image,
                    'width' => $width,
                    'height' => $height,
                    'size' => fake()->randomDigit(),
                    'post_id' => $post->id
                ];

                if (count($images) === 10000) {
                    DB::table("images")->insert($images);
                    $images = [];
                }
            }
        }

        DB::table("images")->insert($images);
    }
}
