<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\JsonResponse;

class TagController extends Controller
{
    public function getTagInfo (Tag $tag): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $tag
        ]);
    }
}
