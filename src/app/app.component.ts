import { Component } from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1/test1.component';
import { CrudComponent } from './crud/crud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CrudComponent, PopUpComponent, CommonModule, Test1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Real-Time-Tasks';
}
