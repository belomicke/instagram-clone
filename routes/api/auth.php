<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post('login', [AuthController::class, 'login']);
Route::post('signup', [AuthController::class, 'signup']);

Route::middleware("auth:sanctum")->group(function () {
    Route::post("auth/edit", [AuthController::class, 'editCurrentUser']);

    Route::post("auth/avatar", [AuthController::class, 'changeAvatar']);
    Route::delete("auth/avatar", [AuthController::class, 'deleteAvatar']);

    Route::get('current_user', [AuthController::class, 'getCurrentUser']);
    Route::delete('logout', [AuthController::class, 'logout']);
});
