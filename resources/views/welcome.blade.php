<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />

        <title>Instagram</title>

        @vitereactrefresh
        @vite('resources/js/app.js')
    </head>
    <body class="antialiased">
        <div id="app"></div>
    </body>
</html>
