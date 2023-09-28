<?php

namespace App\Services;

use App\Models\Image as ImageModel;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class ImageService
{
    public function createImage (UploadedFile $image, string $postId): void
    {
        $uploadedImage = Image::make($image);

        $file = Storage::disk('public')->putFile('posts/'.$postId, $image);

        ImageModel::create([
            'url' => 'http://localhost/storage/'.$file,
            'path' => 'public/'.$file,
            'size' => $image->getSize(),
            'width' => $uploadedImage->width(),
            'height' => $uploadedImage->height(),
            'post_id' => $postId
        ]);
    }

    public function saveAvatar (UploadedFile $image): string
    {
        $extension = $image->extension();
        $uploadedImage = Image::make($image);
        $resized = $uploadedImage->resize(128, 128)->encode($extension);

        $path = 'avatars/' . Str::random() . '.' . $extension;
        Storage::disk('public')->put($path, $resized);
        return $path;
    }
}
