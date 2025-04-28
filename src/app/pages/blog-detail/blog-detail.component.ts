import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarFullComponent } from "../../components/navbar/navbar-full/navbar-full.component";
import { BlogOneComponent } from "../../components/blog-one/blog-one.component";
import { GetInTouchTwoComponent } from "../../components/get-in-touch-two/get-in-touch-two.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { blogData } from '../../data/data';

interface blogData{
    id: number;
    image: string;
    title: string;
    desc: string;
    date: string;
}

@Component({
  selector: 'app-blog-detail',
  imports: [
    CommonModule,
    NavbarFullComponent,
    BlogOneComponent,
    GetInTouchTwoComponent,
    FooterComponent
],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  social = [
    'facebook','instagram','twitter','linkedin','github','youtube','gitlab'
  ]

  blogData:blogData[] = blogData

  data:any
  id:any

  constructor(private router:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
    this.data = this.blogData.find((item) => item.id === parseInt(this.id))
  }
}
