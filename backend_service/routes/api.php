<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\V1\SuperheroController;
use App\Http\Controllers\API\V1\TokenController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('v1/allsuperheroes',[SuperheroController::class, 'callApi'])->middleware('token.empty', 'token.valid');
Route::get('v1/superhero/{superhero_id}', [SuperheroController::class, 'callSuperHero'])->middleware('token.empty', 'token.valid');
Route::get('v1/superheroes/{superheroes_ids}', [SuperheroController::class, 'callSuperHeroes'])->middleware('token.empty', 'token.valid');
Route::get('v1/getToken', [TokenController::class, 'generateToken']);