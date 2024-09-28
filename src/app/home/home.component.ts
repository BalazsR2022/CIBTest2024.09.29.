import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports: [ButtonComponent, HeaderComponent, CommonModule, RouterModule],
})
export class HomeComponent {
  products = [
    { name: 'Termék 1', category: 'Kategória 1', quantity: 1, price: 1000 },
    { name: 'Termék 2', category: 'Kategória 2', quantity: 2, price: 2000 },
    { name: 'Termék 3', category: 'Kategória 3', quantity: 3, price: 3000 },
  ];
}
