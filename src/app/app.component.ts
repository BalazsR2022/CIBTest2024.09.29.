
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AddressesComponent } from './addresses/addresses.component';
import { OrdersComponent } from './orders/orders.component';
import { ButtonComponent } from './shared/button/button.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent, 
    UserManagerComponent,
    HomeComponent,
    ShoppingCartComponent,
    AddressesComponent,
    OrdersComponent,
    ButtonComponent,
    RouterOutlet,
  ],
 
})
export class AppComponent {
  title = 'SuperWebsite';
}
