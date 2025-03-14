import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  uploads: string[] = [];

  saveImages(event: any) {
    console.log(event);

    const totalFiles = event.target.files;
    if (totalFiles.length > 0) {
      // alert('You can only upload a maximum of 10 files');
      for (let i = 0; i < totalFiles.length; i++) {
        let file = totalFiles[i];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event:any) => {
          let upload = event.target.result;
          this.uploads.push(upload);
        };
      }
      event.target.value = '';
    }
  }

  deleteImages(i:number){
    this.uploads.splice(i, 1);
  }
}
