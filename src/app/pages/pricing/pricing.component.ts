import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarFullComponent } from "../../components/navbar/navbar-full/navbar-full.component";
import { GetInTouchTwoComponent } from "../../components/get-in-touch-two/get-in-touch-two.component";
import { PriceComponent } from "../../components/price/price.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-pricing',
  imports: [
    CommonModule,
    NavbarFullComponent,
    GetInTouchTwoComponent,
    PriceComponent,
    FooterComponent
],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

}
