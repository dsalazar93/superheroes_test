<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class TokenIsEmpty
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        
        if($request->input('token') == null){
            return response()->json(['message' => 'No autorizado']);
        }

        return $next($request);
    }
}
