import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GetInTouchTwoComponent } from "../../components/get-in-touch-two/get-in-touch-two.component";
import { blogData } from '../../data/data';
import { NavbarFullComponent } from "../../components/navbar/navbar-full/navbar-full.component";
import { FooterComponent } from "../../components/footer/footer.component";

interface BlogData{
    id: number;
    image: string;
    title: string;
    desc: string;
    date: string;
}

@Component({
  selector: 'app-blogs',
  imports: [
    CommonModule,
    RouterLink,
    GetInTouchTwoComponent,
    NavbarFullComponent,
    FooterComponent
],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogData:BlogData[] = blogData
}
