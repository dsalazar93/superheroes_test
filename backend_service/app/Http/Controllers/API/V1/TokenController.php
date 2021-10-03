<?php

namespace App\Http\Controllers\API\V1;

use App\Models\Token;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TokenController extends Controller
{
    public function generateToken(){
        $newToken = Str::random(30);
        $token = new Token();
        $token->token = $newToken;
        $token->save();

        if($token->id){
            return response()->json(['access_token' => $newToken]);
        } else {
            return response()->json(['message' => 'Nose pudo generar el token']);
        }

    }
}
