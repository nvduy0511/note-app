<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="{{ URL::asset("images/note32.png") }}">
        @vite('resources/css/app.css')
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://unpkg.com/@vueup/vue-quill@1.0.0-beta.9/dist/vue-quill.snow.prod.css">
        <title>NoteApp</title>
    </head>
    <body>
        <div id="app"></div>
        @vite('resources/js/app.js')
    </body>
</html>
