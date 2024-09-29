
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class HeaderComponent implements OnInit {
  itemCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {

    this.cartService.cartItems$.subscribe(items => {
      this.itemCount = items.length; 
    });
  }
}

