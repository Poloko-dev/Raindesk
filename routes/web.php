<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');

    Route::prefix('/')->group(function () {
        Route::get('services', fn() => Inertia::render('AvailableService'))->name('services');
        Route::get('api&apps', fn() => Inertia::render('API&ExternalApp'))->name('api&apps');
        Route::get('payments&subscription', fn() => Inertia::render('Payments&Subscription'))->name('payments&subscription');
        Route::get('useraccess', fn() => Inertia::render('Users&AccessControl'))->name('useraccess');
        Route::get('accountmanagement', fn() => Inertia::render('AccountManagement'))->name('accountmanagement');
        Route::get('settings&sys', fn() => Inertia::render('Settings&System'))->name('settings&sys');
        Route::get('reports&logs', fn() => Inertia::render('Reports&Logs'))->name('reports&logs');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
