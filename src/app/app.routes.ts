import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const routes: Routes = [
    {
        path: '', redirectTo:'/home', pathMatch: 'full'
       
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactUsComponent },
];
