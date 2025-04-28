import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-price',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent {

}
