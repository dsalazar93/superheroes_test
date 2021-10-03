<?php

namespace App\Http\Middleware;

use App\Models\Token;
use Closure;
use Illuminate\Http\Request;

class EnsureTokenIsValid
{
    
    public function handle(Request $request, Closure $next)
    {
        if($request->input('token')){
            if(!Token::where('token', $request->input('token'))->exists()){
                return response()->json(['message' => 'No autorizado']);
            }
        }

        return $next($request);
    }
}
