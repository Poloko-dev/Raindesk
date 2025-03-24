<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Service\ServiceController;


Route::get('/test-api', function () {
    return response()->json(['message' => 'API is working!']);
});

Route::apiResource('services', ServiceController::class);
