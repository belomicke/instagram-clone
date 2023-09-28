<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\App\SearchController;

require_once 'api/feed.php';
require_once 'api/auth.php';
require_once 'api/user.php';
require_once 'api/post.php';
require_once 'api/tag.php';

Route::get('/search', SearchController::class);
