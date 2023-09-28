<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $query = $request->input('query');

        $usersThatContainsQueryInUsername = User::query()->where('username', 'like', '%'.$query.'%');

        $result = $usersThatContainsQueryInUsername->take(10)->get();

        return response()->json([
            'success' => true,
            'data' => $result
        ]);
    }
}
