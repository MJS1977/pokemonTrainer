import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Header } from '../header/header.component';

@Component({

    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],


})
export class LoginPage {
    constructor(private router: Router) { }

    title = 'login komponentti';

    onSubmit(data) {

        if (data.name == null || data.name == '') {

            alert("Submit a valid username!");
        }

        else {
            this.router.navigate(['./catalogue'])
        }

        //console.log(data.name);

    }
}
