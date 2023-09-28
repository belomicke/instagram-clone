<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TagController;

Route::get('tag/{tag:tag}', [TagController::class, 'getTagInfo']);
