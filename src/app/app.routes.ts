import { Routes } from '@angular/router';
import { IndexOneComponent } from './pages/index-one/index-one.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ServicesComponent } from './pages/services/services.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { TeamComponent } from './pages/team/team.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { IndexTwoComponent } from './pages/index-two/index-two.component';
import { IndexThreeComponent } from './pages/index-three/index-three.component';
import { IndexFourComponent } from './pages/index-four/index-four.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';

export const routes: Routes = [
    {path:'', component:IndexOneComponent},
    {path:'index-two', component:IndexTwoComponent},
    {path:'index-three', component:IndexThreeComponent},
    {path:'index-four', component:IndexFourComponent},

    {path:'aboutus', component:AboutusComponent},
    {path:'services', component:ServicesComponent},
    {path:'pricing', component:PricingComponent},
    {path:'team', component:TeamComponent},
    {path:'blogs', component:BlogsComponent },
    {path:'blog-detail', component:BlogDetailComponent },
    {path:'blog-detail/:id', component:BlogDetailComponent },
    {path:'contactus', component:ContactusComponent },
    
    {path:'login', component:LoginComponent },
    {path:'signup', component:SignupComponent},
    {path:'reset-password', component:ResetPasswordComponent},

];
