import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'administration', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)
  },
  {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
