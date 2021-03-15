import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})
export class PokemonList implements OnInit {

    pokemons: any[] = [];

    constructor(
        private dataService: DataService, private router: Router
    ) { }

    //add selected object to dataservice and go to detailpage
    select(item) {
        this.dataService.selectedPokemon(item);
        this.router.navigate(['./detail']);
    }

    ngOnInit(): void {
        this.dataService.getPokemons()
            .subscribe((response: any) => {
                response.results.forEach(result => {
                    this.dataService.getMoreData(result.name)
                        .subscribe((uniqResponse: any) => {
                            this.pokemons.push(uniqResponse);
                        });
                });
            });
    }
}
