<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Service\ServiceController;
use App\Http\Controllers\Application\AppController;

Route::apiResource('services', ServiceController::class);
Route::apiResource('applications', AppController::class);
Route::post('applications/block', [AppController::class, 'block']);