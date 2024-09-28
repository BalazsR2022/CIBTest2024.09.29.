import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  standalone: true,
  imports: [ButtonComponent, RouterLink]
})
export class ShoppingCartComponent {

}
