import { Component } from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ PopUpComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Real-Time-Tasks';
}
