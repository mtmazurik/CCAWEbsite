import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogData } from '../../data/data';

interface BlogData{
    id: number;
    image: string;
    title: string;
    desc: string;
    date: string;
}

@Component({
  selector: 'app-blog-one',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './blog-one.component.html',
  styleUrl: './blog-one.component.css'
})
export class BlogOneComponent {
  blogData:BlogData[] = blogData
}
