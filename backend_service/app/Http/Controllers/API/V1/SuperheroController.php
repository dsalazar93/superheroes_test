<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SuperheroController extends Controller
{
    public function callApi(){
        $response = Http::get('https://gateway.marvel.com/v1/public/characters',[
            'ts' => '1',
            'apikey' => 'edeb36852f8696cb83c487b2279bf494',
            'hash' => '4f143c76c354fbfeead772ab3f62a179'
        ]);

        return $response->json();
    }

    public function callSuperHero($superhero_id){
        $responseApi = $this->callApi();
        $superHeroesData = $responseApi['data'];
        
        $superHeroPosition = array_search($superhero_id, array_column($superHeroesData['results'],'id'));
        return $superHeroesData['results'][$superHeroPosition];
    }

    public function callSuperHeroes($superheroes_ids){
        $responseApi = $this->callApi();
        $superHeroesData = $responseApi['data'];

        $ids = explode(",",$superheroes_ids);
        $superHeroesRanking = [];
        foreach($ids as $id){
            $superHeroPosition = array_search($id, array_column($superHeroesData['results'],'id'));
            array_push($superHeroesRanking, $superHeroesData['results'][$superHeroPosition]);
        }

        return $superHeroesRanking;
    }
}
