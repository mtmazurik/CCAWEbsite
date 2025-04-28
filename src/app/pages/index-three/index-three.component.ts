import { Component, HostListener } from '@angular/core';
import { NavbarDarkComponent } from "../../components/navbar/navbar-dark/navbar-dark.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServiceOneComponent } from "../../components/service-one/service-one.component";
import { CtaComponent } from "../../components/cta/cta.component";
import { PriceComponent } from "../../components/price/price.component";
//import { ClientComponent } from "../../components/client/client.component";
import { BlogOneComponent } from "../../components/blog-one/blog-one.component";
import { GetInTouchComponent } from "../../components/get-in-touch/get-in-touch.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-index-three',
  imports: [
    CommonModule,
    RouterLink,
    NavbarDarkComponent,
    ServiceOneComponent,
    CtaComponent,
    PriceComponent,
//    ClientComponent,
    BlogOneComponent,
    GetInTouchComponent,
    FooterComponent
],
  templateUrl: './index-three.component.html',
  styleUrl: './index-three.component.css'
})
export class IndexThreeComponent {
currentSection: string | null = 'home';

  @HostListener('window:scroll', ['$event'])
  
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section) => {
      const sectionId = section.getAttribute('id');
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop - 50 && scrollPos < sectionTop + sectionHeight) {
        this.currentSection = sectionId;
      }
    });
  }
}
