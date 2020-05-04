import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloorPipe } from './floor.pipe';
import { RevePipe } from './reve.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OrderComponent } from './order/order.component';
import { DepartmentModule } from './department/department.module';
import { ProductModule } from './product/product.module';
import { LoginComponent } from './login/login.component';
import { ProdComponent } from './prod/prod.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HttComponent } from './30032020/htt/htt.component';
import { PostComponent } from './post/post.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FloorPipe,
    RevePipe,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    NotfoundComponent,
    OrderComponent,
    LoginComponent,
    ProdComponent,
    SignupComponent,
    HttComponent,
    PostComponent,
    EmployeeComponent,
    ContactComponent
     
  ],
  imports: [
    BrowserModule,
    DepartmentModule,
    ProductModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule   
    ],
  providers: [] , bootstrap: [AppComponent]
})
export class AppModule { }
