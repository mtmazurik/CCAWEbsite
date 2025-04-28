import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import * as feather from 'feather-icons';



@Component({
  selector: 'app-navbar-one',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './navbar-one.component.html',
  styleUrl: './navbar-one.component.css'
})
export class NavbarOneComponent {
  current = ''
  toggleManu:boolean = true

  toggleMenu(){
    this.toggleManu = !this.toggleManu
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.current = this.router.url;
    window.scrollTo(0, 0);
  }

  @Input() currentSection:any

  ngAfterViewInit(): void {
    feather.replace()
  }

  toggle:boolean = false
  
  scroll:boolean = false

  @HostListener("window:scroll",['event'])
  

  onhandlerScroll(){
    if (window.scrollY > 0) {
      this.scroll = true
    }else{
      this.scroll = false
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
