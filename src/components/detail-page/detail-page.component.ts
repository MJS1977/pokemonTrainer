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

    constructor(private dataService: DataService, private router: Router) { }
    title = 'detail komponentti';

    addToCollection() {
        this.dataService.collectedPokemons(this.selected);
        console.log("tyyppi detaili on: " + typeof (this.selected));
        console.log(Object.values(this.selected));
        console.log("testiprintti" + this.selected);

        const keys = Object.keys(this.selected);
        console.log("avaimet" + keys);
        console.log(this.selected["name"]);
        console.log(this.selected["front_default"]);
    }

    //get selected pokemon from dataservice and save to a variable
    ngOnInit(): void {
        this.selected = this.dataService.getSelectedPokemon();
    }
}
