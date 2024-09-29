import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ButtonComponent } from '../shared/button/button.component';

import { CommonModule } from '@angular/common';


import { Address } from './addresses.component.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css'],
  standalone: true,
  imports: [ButtonComponent, RouterModule, CommonModule, ],
  
})
export class AddressesComponent implements OnInit{
  addresses: Address[] = []; 

  constructor(private dataService: DataService) {} 

  ngOnInit(): void {
    this.getAddresses(); 
  }

  getAddresses(): void {
    this.dataService.getAllAddresses().subscribe(
      (addresses) => {
        this.addresses = addresses;
      },
      (error) => {
        console.error('Hiba a címek lekérdezésekor:', error);
      }
    );
  }
}
