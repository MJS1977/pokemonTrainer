import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { LoginPage } from '../components/login-page/login-page.component';
import { CataloguePage } from '../components/catalogue-page/catalogue-page.component';
import { TrainerPage } from '../components/trainer-page/trainer-page.component';
import { DetailPage } from '../components/detail-page/detail-page.component';
import { Header } from '../components/header/header.component';
import { PokemonList } from '../components/pokemon-list/pokemon-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    CataloguePage,
    TrainerPage,
    DetailPage,
    Header,
    PokemonList

  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent, LoginPage]
})
export class AppModule { }
