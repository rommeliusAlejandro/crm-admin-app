import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {UsersListComponent} from "./users-list/users-list.component";
import {RolesComponent} from "./roles/roles.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'users', component: UsersListComponent
      },
      {
        path: 'roles', component: RolesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
