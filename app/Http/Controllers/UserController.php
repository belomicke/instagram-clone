<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public function __construct(
        private readonly UserService $userService
    ) {}

    public function getUser(User $user): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $user
        ]);
    }

    public function followUser(User $user): JsonResponse
    {
        $status = $this->userService->followUser($user);

        return response()->json(['success' => $status]);
    }

    public function unfollowUser(User $user): JsonResponse
    {
        $status = $this->userService->unfollowUser($user);

        return response()->json(['success' => $status]);
    }
}
