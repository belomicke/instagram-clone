<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->ulid('id')->index();

            $table->string('avatar_path')->default("static/default_avatar.png");
            $table->string("name", 64)->default("");
            $table->string('username', 30)->unique();
            $table->string("biography", 150)->default("");

            $table->integer("post_count")->default(0);

            $table->unsignedBigInteger('followers_count')->default(0);
            $table->unsignedBigInteger('follows_count')->default(0);

            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
