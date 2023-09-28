<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangeAvatarRequest;
use App\Services\AuthService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\SignUpRequest;
use Illuminate\Http\Request;
use App\Http\Requests\EditCurrentUserRequest;

class AuthController extends Controller
{
    public function __construct(
        private readonly AuthService $authService,
    ) {}

    public function getCurrentUser(): JsonResponse
    {
        $user = Auth::user()->makeHidden('is_follow');

        return response()->json($user);
    }

    public function editCurrentUser(EditCurrentUserRequest $request): JsonResponse
    {
        $updatedUser = $this->authService->editUser(
            name: $request->input('name'),
            username: $request->input('username'),
            biography: $request->input('biography'),
        );

        return response()->json([
            'success' => true,
            'data' => $updatedUser
        ]);
    }

    public function changeAvatar(ChangeAvatarRequest $request): JsonResponse
    {
        $pathToNewAvatar = $this->authService->changeAvatar(
            avatar: $request->file('avatar')
        );

        return response()->json([
            'success' => true,
            'data' => [
                'avatar_url' => $pathToNewAvatar
            ]
        ]);
    }

    public function deleteAvatar(): JsonResponse
    {
        $status = $this->authService->deleteAvatar();

        return response()->json(['success' => $status]);
    }

    public function login(Request $request): JsonResponse
    {
        $result = $this->authService->getAuthToken(
            username: $request->input('username'),
            password: $request->input('password')
        );

        return response()->json($result);
    }

    public function signup(SignUpRequest $request): JsonResponse
    {
        $this->authService->createUser(
            username: $request->input('username'),
            email: $request->input('email'),
            password: $request->input('password')
        );

        return response()->json(['success' => true]);
    }

    public function logout(): JsonResponse
    {
        $this->authService->logout();

        return response()->json(['success' => true]);
    }
}
