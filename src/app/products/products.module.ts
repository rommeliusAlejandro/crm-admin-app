import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { NewProductComponent } from './new-product/new-product.component';


@NgModule({
  declarations: [
    InventoryComponent,
    NewProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
