<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    public function definition(): array
    {
        return [
            'id' => Str::ulid()->toBase32(),
            'name' => fake()->name(),
            'username' => fake()->unique()->userName(),
            'biography' => fake()->text(150),
            'post_count' => fake()->numberBetween(0, 100),
            'followers_count' => fake()->numberBetween(0, 99),
            'follows_count' => 0,
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ];
    }

    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
