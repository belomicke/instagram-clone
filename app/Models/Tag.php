<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Str;

/**
 * @property string id
 * @property string tag
 *
 * @property int post_count
 *
 * @property Collection posts
 *
 * @method static Tag create (array $attributes = [])
 */
class Tag extends Model
{
    use HasFactory;

    public $incrementing = false;

    protected $fillable = [
        'id',
        'tag',
        'post_count'
    ];

    protected $hidden = [
        'id',
        'posts',
        'updated_at',
        'created_at'
    ];

    protected $casts = [
        'id' => 'string'
    ];

    protected $appends = [
        'cover',
    ];

    public static function booted (): void
    {
        static::creating(function (Tag $tag) {
            $tag->id = Str::ulid()->toBase32();
        });
    }


    public function posts (): BelongsToMany
    {
        return $this->belongsToMany(Post::class);
    }

    public function getCoverAttribute ()
    {
        $post = $this->posts()->orderBy('like_count', 'desc')->first();

        return $post->media->first()->url;
    }
}
