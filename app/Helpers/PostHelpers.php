<?php

namespace App\Helpers;

class PostHelpers
{
    public static function getTagsFromDescription(string $description): array
    {
        if (strlen($description) === 0) return [];

        $tagsFromDescription = array_filter(explode(' ', $description), function($value) {
            return ($value[0] === '#');
        });

        $tagsWithoutSharp = array_map(function($item) {
            return substr($item, 1, strlen($item));
        }, $tagsFromDescription);

        return array_unique($tagsWithoutSharp);
    }
}
