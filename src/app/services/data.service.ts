import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  pokemonCollection: any[] = [];
  selected: {};

  constructor(
    private http: HttpClient
  ) { }

  getPokemons() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=10');
  }

  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  }

  //Add selected pokemon to dataservice variable
  selectedPokemon(item) {
    this.selected = item;
  }

  //Return selected pokemon from dataservice
  getSelectedPokemon() {
    return this.selected;
  }

  //Add selected pokemon to a list
  collectedPokemons(item) {
    if (this.pokemonCollection.includes(item)) {
      let temp = this.pokemonCollection.indexOf(item);
      this.pokemonCollection.splice(temp, 1);
    }
    else {
      this.pokemonCollection.push(item);
    }
  }

  //Return collected pokemons
  getPokemonCollection() {
    return this.pokemonCollection;
  }
}