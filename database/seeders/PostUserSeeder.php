<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = Post::all();
        $likers = [];

        foreach ($posts as $post) {
            $users = User::query()->inRandomOrder()->take($post->like_count)->get();

            foreach ($users as $user) {
                $likers[] = [
                    'user_id' => $user->id,
                    'post_id' => $post->id,
                ];

                if (count($likers) === 10000) {
                    DB::table("post_user")->insert($likers);
                    $likers = [];
                }
            }

        }

        DB::table("post_user")->insert($likers);
    }
}
