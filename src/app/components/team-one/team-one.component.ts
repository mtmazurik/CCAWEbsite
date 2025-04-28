import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { teamData } from '../../data/data';

interface TeamData{
    image: string;
    social: string[];
    name: string;
    position: string;
}

@Component({
  selector: 'app-team-one',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './team-one.component.html',
  styleUrl: './team-one.component.css'
})
export class TeamOneComponent {
  teamData:TeamData[] = teamData
}
