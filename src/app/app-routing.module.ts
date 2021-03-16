import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
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
    component: CataloguePage,
},
{
    path: 'trainer',
    component: TrainerPage,
    canActivate: [AuthGuard]
},
{
    path: 'detail',
    component: DetailPage,
    canActivate: [AuthGuard]
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AppRoutingModule { }


