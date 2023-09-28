<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * @property string id
 * @property string name
 * @property string avatar
 * @property string username
 * @property string biography
 * @property string avatar_path
 * @property int post_count
 *
 * @property int followers_count
 * @property int follows_count
 *
 * @property Collection followers
 * @property Collection follows
 *
 * @property Collection saved_posts
 * @property Collection posts
 *
 * @method static User create (array $attributes = [])
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasUlids;

    protected $fillable = [
        'id',
        'username',
        'email',
        'avatar_path',
        'password',
    ];

    protected $hidden = [
        'password',
        'follows',
        'followers',
        'remember_token',
        'avatar_path',
        'email_verified_at',
        'updated_at',
        'email',
        'pivot',
        'created_at'
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    protected $appends = [
        'avatar',
        'is_follow'
    ];

    public function getAvatarAttribute (): string
    {
        return 'http://localhost/storage/' . $this->avatar_path;
    }

    public function posts (): HasMany
    {
        return $this->hasMany(Post::class);
    }

    public function saved_posts (): BelongsToMany
    {
        return $this->belongsToMany(Post::class, 'post_user_saved');
    }

    public function followers (): BelongsToMany
    {
        return $this->belongsToMany(
            User::class,
            'user_user',
            'followed_id',
            'follower_id'
        );
    }

    public function follows (): BelongsToMany
    {
        return $this->belongsToMany(
            User::class,
            'user_user',
            'follower_id',
            'followed_id'
        );
    }

    public function getIsFollowAttribute (): bool
    {
        return auth('sanctum')->user()->follows->contains($this->id);
    }
}
