import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'detail-page',
    templateUrl: './detail-page.component.html',
    styleUrls: ['./detail-page.component.css']
})
export class DetailPage implements OnInit {

    selected: {};
    sprite: string;



    constructor(private dataService: DataService, private router: Router) { }
    title = 'detail komponentti';


    addToCollection() {
        this.dataService.collectedPokemons(this.selected);
        const keys = Object.keys(this.selected);
        console.log("avaimet" + keys);
    }

    //get selected pokemon from dataservice and save to a variable
    ngOnInit(): void {
        this.selected = this.dataService.getSelectedPokemon();
        this.sprite = this.selected["sprites"]["front_default"];

    }
}
