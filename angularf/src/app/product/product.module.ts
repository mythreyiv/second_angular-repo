import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import {  RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductlistComponent],
  imports: [
    CommonModule, RouterModule.forChild([
      { path: 'productlist', component: ProductlistComponent }
    ])
  ]
})
export class ProductModule { }
