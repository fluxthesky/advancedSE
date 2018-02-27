import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HomepageComponent} from './homepage/homepage.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent } ,
  { path: 'home', component: HomepageComponent}

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
