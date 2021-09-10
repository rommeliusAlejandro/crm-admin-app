import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InventoryComponent} from "./inventory/inventory.component";
import {NewProductComponent} from "./new-product/new-product.component";

const routes: Routes = [
  {
    path: '', component: InventoryComponent,
  },
  {
    path: 'new', component: NewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
