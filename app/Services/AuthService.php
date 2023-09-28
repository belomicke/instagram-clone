<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Contracts\Auth\Authenticatable;

class AuthService
{
    public function __construct (
        private readonly ImageService $imageService,
    ) {}

    public function getAuthToken (string $username, string $password): array
    {
        $user = User::query()->where('username', $username)->first();

        if (!$user) {
            return [
                'success' => false,
                'data' => [
                    'message' => 'Вы ввели некорректные данные.'
                ]
            ];
        }

        $credentials = [
            'username' => $username,
            'password' => $password
        ];

        if (Hash::check($password, $user->password) && Auth::attempt($credentials, true)) {
            $user->tokens()->delete();
            $token = $user->createToken('');

            return [
                'success' => true,
                'data' => [
                    'token' => $token->plainTextToken
                ]
            ];
        } else {
            return [
                'success' => false,
                'data' => [
                    'message' => 'Вы ввели некорректные данные'
                ]
            ];
        }
    }

    public function editUser (string $name, string $username, string $biography): Authenticatable
    {
        $user = auth('sanctum')->user();

        $user->name = $name;
        $user->username = strtolower($username);
        $user->biography = $biography;

        $user->save();

        return $user;
    }

    public function changeAvatar (UploadedFile $avatar): string
    {
        $user = auth('sanctum')->user();

        if ($user->avatar_path !== 'static/default_avatar.png') {
            Storage::disk('public')->delete($user->avatar_path);
        }

        $pathToNewAvatar = $this->imageService->saveAvatar($avatar);
        $user->avatar_path = $pathToNewAvatar;
        $user->save();

        return 'http://localhost/storage/' . $user->avatar_path;
    }

    public function deleteAvatar (): bool
    {
        $user = auth('sanctum')->user();

        if ($user->avatar_path === 'static/default_avatar.png') {
            return false;
        }

        Storage::disk('public')->delete($user->avatar_path);
        $user->avatar_path = 'static/default_avatar.png';
        $user->save();

        return true;
    }

    public function createUser (string $username, string $email, string $password): void
    {
        $user = User::create([
            'email' => $email,
            'username' => strtolower($username),
            'password' => Hash::make($password),
        ]);

        $user->save();
    }

    public function logout (): void
    {
        auth('sanctum')->user()->tokens()->delete();
    }

    public function incrementPostCount (): void
    {
        $user = auth('sanctum')->user();

        $user->post_count++;
        $user->save();
    }

    public function decrementPostCount (): void
    {
        $user = auth('sanctum')->user();

        $user->post_count--;
        $user->save();
    }
}
