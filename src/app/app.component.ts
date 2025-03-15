import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Router } from '@angular/router';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TableToExcelComponent } from './components/table-to-excel/table-to-excel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    TodoFormComponent,
    TodoListComponent,
    TableToExcelComponent
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
