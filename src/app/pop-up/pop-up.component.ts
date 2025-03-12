import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss',
})
export class PopUpComponent {
  showPopup = false;

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
  
  // New method to close the overlay
  // closeOverlay(event: MouseEvent) {
  //   if (event.target === event.currentTarget) {
  //     this.closePopup();
  //   }
  // }

  // Old method to close the overlay
  closeOverlay(event: any) {
    if (event.target.classList.contains('over-lay')) {
      this.showPopup = false;
    }
    // this.showPopup= false;
  }
}
