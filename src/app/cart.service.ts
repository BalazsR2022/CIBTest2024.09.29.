import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './home/home.component.product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSource = new BehaviorSubject<Product[]>(this.loadCartItems()); 
  cartItems$ = this.cartItemsSource.asObservable();

  private loadCartItems(): Product[] {
    const items = localStorage.getItem('cartItems');
    return items ? JSON.parse(items) : [];
  }

  
  addToCart(product: Product) {
    const currentItems = this.cartItemsSource.getValue();
    const updatedItems = [...currentItems, product];
    this.cartItemsSource.next(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems)); 
  }

 
  getCartItems() {
    return this.cartItemsSource.getValue();
  }


  clearCart() {
    this.cartItemsSource.next([]);
    localStorage.removeItem('cartItems'); // Kiürítés a helyi tárolóból
  }
}
