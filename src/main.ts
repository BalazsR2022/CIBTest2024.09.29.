
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { UserManagerComponent } from './app/user-manager/user-manager.component';
import { HomeComponent } from './app/home/home.component';
import { ShoppingCartComponent } from './app/shopping-cart/shopping-cart.component';
import { AddressesComponent } from './app/addresses/addresses.component';
import { OrdersComponent } from './app/orders/orders.component';
import { ButtonComponent } from './app/shared/button/button.component';


const routes: Routes = [
  { path: 'addresses', component: AddressesComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'user-manager', component: UserManagerComponent },
  { path: '', component: HomeComponent },  
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ],
}).catch(err => console.error(err));
