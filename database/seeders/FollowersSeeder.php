<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FollowersSeeder extends Seeder
{
    public function run(): void
    {
        $users = User::all();

        foreach ($users as $user) {
            $followers = User::query()->where('id', '<>', $user->id)->inRandomOrder()->take($user->followers_count)->get();

            $entities = [];

            for ($i = 0; $i < $user->followers_count; $i++) {
                $entities[] = [
                    'follower_id' => $followers[$i]->id,
                    'followed_id' => $user->id,
                ];

                $followers[$i]->follows_count++;
                $followers[$i]->save();
            }

            DB::table("user_user")->insert($entities);
        }
    }
}
