import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, HttpClientModule ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent implements OnInit {
  http = inject(HttpClient);
  users:any = null;
  loading = true;
  url='https://jsonplaceholder.typicode.com/users';
  ngOnInit(): void {
    this.http.get(this.url).subscribe((data: any) => {
      setTimeout(() => {
      this.users = data;
      this.loading = false;
      }, 2000);
    });
  }
}
