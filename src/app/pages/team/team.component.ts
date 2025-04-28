import { Component } from '@angular/core';
import { NavbarFullComponent } from "../../components/navbar/navbar-full/navbar-full.component";
import { GetInTouchTwoComponent } from "../../components/get-in-touch-two/get-in-touch-two.component";
import { CommonModule } from '@angular/common';
import { teamData } from '../../data/data';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

interface TeamData{
  image: string;
  social: string[];
  name: string;
  position: string;
}

@Component({
  selector: 'app-team',
  imports: [
    CommonModule,
    RouterLink,
    NavbarFullComponent,
    GetInTouchTwoComponent,
    FooterComponent
],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teamData:TeamData[] = teamData
}
