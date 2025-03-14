import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ContactUsComponent, HttpClientModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  http = inject(HttpClient);
  searchInput = '';
  filterProducts: any[] = [];
  allProducts: any[] = [];
  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products').subscribe((data) => {
      console.log(data);
      this.filterProducts = data as any[];
      this.allProducts = data as any[];
    });
  }

  filteredProducts() {
    this.filterProducts = this.allProducts.filter((product) => {
      return product.title.toLowerCase().includes(this.searchInput.toLowerCase());
    });
  }
}
