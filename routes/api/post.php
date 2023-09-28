<?php

use App\Http\Controllers\Post\CreatePostController;
use App\Http\Controllers\Post\DeletePostController;
use App\Http\Controllers\Post\EditPostController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::prefix("posts")->middleware("auth:sanctum")->group(function () {
    Route::post('create', CreatePostController::class);
});

Route::prefix("post")->middleware("auth:sanctum")->group(function () {
    Route::get('{post}', [PostController::class, 'getPost']);

    Route::post('{post}/edit', EditPostController::class);

    Route::post('{post}/like', [PostController::class, 'likePost']);
    Route::post('{post}/unlike', [PostController::class, 'unlikePost']);

    Route::post('{post}/saved/add', [PostController::class, 'addToSaved']);
    Route::post('{post}/saved/remove', [PostController::class, 'removeFromSaved']);

    Route::post('{post}/like_count/show', [PostController::class, 'showLikeCount']);
    Route::post('{post}/like_count/hide', [PostController::class, 'hideLikeCount']);

    Route::delete('{post}', DeletePostController::class);
});
