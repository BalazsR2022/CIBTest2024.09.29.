import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css'],
  standalone: true,
  imports: [ButtonComponent, RouterLink]
})
export class AddressesComponent {

}
