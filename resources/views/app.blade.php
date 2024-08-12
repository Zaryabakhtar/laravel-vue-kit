<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>New Laravel Application</title>
        <meta name="description" content="" />
        @vite(['resources/css/app.css','resources/js/app.js'])
    </head>
    <body>
        <div id="app"></div>
        
        <!-- Define JavaScript variable for base URL -->
        <script>
            window.baseUrl = "{{ config('app.url') }}";
        </script>
    </body>
</html>