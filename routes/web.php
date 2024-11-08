<?php

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/users', function () {
    // sleep(2);
    return Inertia::render('Users', [
        // 'time' => now()->toTimeString()
        'users' => User::paginate(10)->through(fn($user) => [
            'id' => $user->id,
            'name' => $user->name,
        ]),

    //     'users' => User::all()->map(fn($user) => [
    //         'id' => $user->id,
    //         'name' => $user->name
    //     ]
    // ),
    ]);
}); 

Route::get('/settings', function () {
    return Inertia::render('Settings');
});

Route::post('/logout', function () {
    dd(request('foo'));
});

// Route::get('/', function () {
//     return Inertia::render('Home');
// });