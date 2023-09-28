<?php

namespace App\Services;

use App\Models\User;

class UserService
{
    public function followUser (User $user): bool
    {
        $currentUser = auth('sanctum')->user();

        if ($user->followers->contains($currentUser->id)) {
            return false;
        }

        $user->followers()->attach($currentUser->id);
        $user->followers_count++;
        $currentUser->follows_count++;
        $currentUser->save();
        $user->save();

        return true;
    }

    public function unfollowUser(User $user): bool
    {
        $currentUser = auth('sanctum')->user();

        if (!$user->followers->contains($currentUser->id)) {
            return false;
        }

        $user->followers()->detach($currentUser->id);
        $user->followers_count--;
        $currentUser->follows_count--;
        $currentUser->save();
        $user->save();

        return true;
    }
}
