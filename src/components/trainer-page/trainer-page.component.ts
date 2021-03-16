import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'trainer-page',
    templateUrl: './trainer-page.component.html',
    styleUrls: ['./trainer-page.component.css']
})
export class TrainerPage implements OnInit {

    pokemons: any[] = [];

    constructor(
        private dataService: DataService, private router: Router
    ) { }

    //add selected object to dataservice and go to detailpage
    select(item) {
        this.dataService.selectedPokemon(item);
        this.router.navigate(['./detail']);
    }

    //get the selected pokemons
    ngOnInit(): void {
        this.pokemons = this.dataService.getPokemonCollection();
    }
}
