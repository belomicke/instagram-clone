<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FeedController;

Route::prefix('feed')->middleware('auth:sanctum')->group(function () {
    Route::get('popular', [FeedController::class, 'getPopularPosts']);
    Route::get('saved', [FeedController::class, 'getSavedPosts']);

    Route::get('user/{user:username}/posts', [FeedController::class, 'getUserPosts']);
    Route::get('user/{user:username}/followers', [FeedController::class, 'getUserFollowers']);
    Route::get('user/{user:username}/follows', [FeedController::class, 'getUserFollows']);

    Route::get('post/{post}/likers', [FeedController::class, 'getPostLikers']);

    Route::get('tag/{tag:tag}/posts', [FeedController::class, 'getTagPosts']);
});
