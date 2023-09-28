<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Str;

/**
 * Post
 *
 * @property string id
 * @property string description
 *
 * @property int like_count
 * @property int media_count
 *
 * @property bool like_count_is_hidden
 *
 * @property string user_id
 *
 * @property Collection likers
 * @property Collection savers
 * @property Collection tags
 * @property Collection media
 *
 * @property User author
 *
 * @method static Post create (array $attributes = [])
 */
class Post extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'id',
        'description',
        'user_id',
        'media_count',
        'like_count_is_hidden'
    ];

    protected $hidden = [
        'pivot',
        'likers',
        'savers',
        'updated_at',
    ];

    protected $appends = [
        'is_liked',
        'is_saved',
    ];

    protected $casts = [
        'like_count_is_hidden' => 'boolean',
    ];

    public static function booted (): void
    {
        static::creating(function (Post $post) {
            $post->id = Str::ulid()->toBase32();
            $post->user_id = auth('sanctum')->id();
        });
    }

    public function author (): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function likers (): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }

    public function savers (): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'post_user_saved');
    }

    public function tags (): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    public function media (): HasMany
    {
        return $this->hasMany(Image::class);
    }

    public function getIsSavedAttribute (): bool
    {
        $user = auth('sanctum')->id();

        return $this->savers->contains($user);
    }

    public function getIsLikedAttribute (): bool
    {
        $id = auth('sanctum')->id();

        return $this->likers->contains($id);
    }
}
