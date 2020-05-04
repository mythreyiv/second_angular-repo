import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [/*{path:'**' , component:NotfoundComponent},{path:'',redirectTo:'home',pathMatch:'full'},
{path : 'home' , component:HomeComponent},
{path : 'blog' , component:BlogComponent},{path:'about',component:AboutComponent}*/
{path : 'order' , component : OrderComponent , canActivate : [AuthGuard]},
{path : 'login', component : LoginComponent},{path:'contact',component: ContactComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
