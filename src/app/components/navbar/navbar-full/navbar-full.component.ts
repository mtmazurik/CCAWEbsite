import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import * as feather from 'feather-icons'

@Component({
  selector: 'app-navbar-full',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './navbar-full.component.html',
  styleUrl: './navbar-full.component.css'
})
export class NavbarFullComponent {

  manu:string = '';
  subManu:string = '';
  current = ''
  toggleManu:boolean = false

    ngAfterViewInit(): void {
      feather.replace()
    }
    constructor(private router: Router) {}

    ngOnInit() {
      this.current = this.router.url;
      this.manu = this.current
      this.subManu = this.current
      window.scrollTo(0, 0);
    }
    
    openManu(item:string){
      this.subManu = item
    }

    toggleMenu(){
      this.toggleManu = !this.toggleManu
    }

    scroll:boolean = false

    @HostListener("window:scroll",['event'])
    
  
    onhandlerScroll(){
      if (window.scrollY > 0) {
        this.scroll = true
      }else{
        this.scroll = false
      }
    }

}
