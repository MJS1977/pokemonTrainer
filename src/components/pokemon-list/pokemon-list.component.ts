import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})
export class PokemonList implements OnInit {

    pokemons: any[] = [];

    constructor(
        private dataService: DataService
    ) { }

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

    //title = 'pokemon detail komponentti';
}