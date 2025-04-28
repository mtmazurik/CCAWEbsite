import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarFullComponent } from "../../components/navbar/navbar-full/navbar-full.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-contactus',
  imports: [
    CommonModule,
    NavbarFullComponent,
    FooterComponent
],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

}
