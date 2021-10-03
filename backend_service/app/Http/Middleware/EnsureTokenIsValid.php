<?php

namespace App\Http\Middleware;

use App\Models\Token;
use Closure;
use Illuminate\Http\Request;

class EnsureTokenIsValid
{
    
    public function handle($request, Closure $next)
    {
        if($request->route('token')){
            if(!Token::where('token', $request->route('token'))->exists()){
                return response()->json(['message' => 'No autorizado']);
            }
        }
         
        return $next($request);
    }
}
