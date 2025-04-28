import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-switcher',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './switcher.component.html',
  styleUrl: './switcher.component.css'
})
export class SwitcherComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrolled: boolean = false;

  @HostListener("window:scroll", [])

  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
}

topFunction(e:any) {
  e.preventDefault();
  this.document.body.scrollTop = 0;
  this.document.documentElement.scrollTop = 0;
}

  changeMode() {
    const htmlTag = this.document.documentElement;
    if (htmlTag.className.includes("dark")) {
      htmlTag.className = 'light'
    } else {
      htmlTag.className = 'dark'
    }
  }
  toggleMode(e:any) {
    e.preventDefault();
    const switcherRtl = this.document.getElementById("switchRtl") as any;
    if (switcherRtl.innerText === "LTR") {
      this.document.documentElement.dir = "ltr"
    }
    else {
      this.document.documentElement.dir = "rtl"
    }
  }
}
