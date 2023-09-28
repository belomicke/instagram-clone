<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    public function run(): void
    {
        $users = User::all();
        $posts = [];

        foreach ($users as $user) {
            for ($i = 0; $i < $user->post_count; $i++) {
                $description = fake()->text();

                for ($j = 0; $j < 3; $j++) {
                    $tag = '#' . fake()->word();

                    $description = $description . ' ' . $tag;
                }

                $posts[] = [
                    'id' => Str::ulid()->toBase32(),
                    'description' => $description,
                    'like_count' => fake()->numberBetween(0, 100),
                    'media_count' => fake()->numberBetween(1, 10),
                    'user_id' => $user->id,
                    'updated_at' => fake()->dateTime(),
                    'created_at' => fake()->dateTime()
                ];
            }
        }

        DB::table("posts")->insert($posts);
    }
}
