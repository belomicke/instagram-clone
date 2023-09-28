<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            PostSeeder::class,
            TagSeeder::class,
            ImageSeeder::class,
            PostUserSeeder::class,
            FollowersSeeder::class,
            PostTagSeeder::class,
        ]);
    }
}
