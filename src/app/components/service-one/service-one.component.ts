import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { servicesData } from '../../data/data';

interface ServicesData{
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-service-one',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './service-one.component.html',
  styleUrl: './service-one.component.css'
})
export class ServiceOneComponent {
  servicesData:ServicesData[] = servicesData
  @Input() title:any
}
