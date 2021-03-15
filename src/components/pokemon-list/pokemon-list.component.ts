import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})
export class PokemonList implements OnInit {

    pokemons: any[] = [];
    pokemonCollection: any[] = [];
    //statusClass = 'not-active';

    constructor(
        private dataService: DataService
    ) { }

    collectedPokemons(item) {

        if (this.pokemonCollection.includes(item)) {
            let temp = this.pokemonCollection.indexOf(item);
            this.pokemonCollection.splice(temp, 1);
            console.log(this.pokemonCollection);
        }

        else {
            this.pokemonCollection.push(item);
            console.log(this.pokemonCollection);

        }
    }

    ngOnInit(): void {
        this.dataService.getPokemons()
            .subscribe((response: any) => {
                response.results.forEach(result => {
                    this.dataService.getMoreData(result.name)
                        .subscribe((uniqResponse: any) => {
                            this.pokemons.push(uniqResponse);
                            console.log(this.pokemons);
                        });
                });
            });
    }
}
