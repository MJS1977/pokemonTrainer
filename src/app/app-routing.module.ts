import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from '../components/login-page/login-page.component';
import { CataloguePage } from '../components/catalogue-page/catalogue-page.component';
import { TrainerPage } from '../components/trainer-page/trainer-page.component';
import { DetailPage } from '../components/detail-page/detail-page.component';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: LoginPage
},
{
    path: 'catalogue',
    component: CataloguePage
},
{
    path: 'trainer',
    component: TrainerPage
},
{
    path: 'detail',
    component: DetailPage
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }


