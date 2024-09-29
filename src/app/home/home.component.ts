
import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';
import { Product } from './home.component.product.model';
import { DataService } from '../data.service'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [ButtonComponent, HeaderComponent, CommonModule, RouterModule,],
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private dataService: DataService) {} 

  ngOnInit(): void {
    this.loadProducts(); 
  }

  loadProducts(): void {
   
     this.dataService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
    
  }
}
