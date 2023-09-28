<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::middleware("auth:sanctum")->prefix('user')->group(function () {
    Route::get('id/{user}', [UserController::class, 'getUser']);
    Route::get('{user:username}', [UserController::class, 'getUser']);

    Route::post('{user:username}/follow', [UserController::class, 'followUser']);
    Route::post('{user:username}/unfollow', [UserController::class, 'unfollowUser']);
});
