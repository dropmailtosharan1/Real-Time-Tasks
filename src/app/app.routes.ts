import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CrudComponent } from './crud/crud.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { Test1Component } from './test1/test1.component';
import { TableToExcelComponent } from './components/table-to-excel/table-to-excel.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'pop-up', component: PopUpComponent },
  { path: 'test1', component: Test1Component },
  { path: 'table-to-excel', component: TableToExcelComponent },

];
