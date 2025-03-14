import { Component } from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1/test1.component';
import { CrudComponent } from './crud/crud.component';
import { NavigationEnd, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Router } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CrudComponent,
    PopUpComponent,
    CommonModule,
    Test1Component,
    HeaderComponent,
    AboutComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Real-Time-Tasks';

  showHeader=true;

  constructor(private router:Router){
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/login') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    });
  }
 
}
