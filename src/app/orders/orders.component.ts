import { Component, OnInit } from '@angular/core';
import { UserManagerComponent } from '../user-manager/user-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { Product } from '../home/home.component.product.model';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  standalone: true,
  imports: [UserManagerComponent,CommonModule, HttpClientModule, RouterModule],
})
export class OrdersComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }
}