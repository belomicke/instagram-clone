<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static Image create(array $attributes = [])
 */
class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'url',
        'path',
        'height',
        'width',
        'size',
        'post_id'
    ];
}
