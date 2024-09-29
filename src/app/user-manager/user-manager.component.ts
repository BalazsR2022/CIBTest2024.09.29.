import { Component } from '@angular/core';
import { AddressesComponent } from "../addresses/addresses.component";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { User } from './user-manager.component.model';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css'],
  standalone: true,
  imports: [AddressesComponent, FormsModule, CommonModule, HttpClientModule, RouterModule],
})
export class UserManagerComponent {
users: User[] = [];

constructor(private dataService: DataService) {
  this.loadUsers(); 
}
loadUsers() {
  this.dataService.getUsers().subscribe({
    next: (data) => {
      this.users = data; 
    },
    error: (error) => {
      console.error('Hiba a felhasználók betöltésekor:', error);
    },
    complete: () => {
      console.log('Felhasználók betöltése befejezve.');
    }
  });
}

}


