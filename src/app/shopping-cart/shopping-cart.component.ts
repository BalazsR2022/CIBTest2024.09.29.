import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  standalone: true,
  imports: [ButtonComponent, RouterModule, HttpClientModule]
})
export class ShoppingCartComponent {

}
