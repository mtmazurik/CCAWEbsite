import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { clientData } from '../../data/data';

interface ClientData{
    ulClass: string;
    image1: string;
    name1: string;
    position1: string;
    desc1: string;
    image2: string;
    name2: string;
    position2: string;
    desc2: string;
    rate: string[];
}

@Component({
  selector: 'app-client',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  clientData:ClientData[] = clientData
}
