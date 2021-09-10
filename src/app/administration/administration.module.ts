import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { RolesComponent } from './roles/roles.component';
import { MainComponent } from './main/main.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UsersListComponent,
    NewUserFormComponent,
    RolesComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule
  ]
})
export class AdministrationModule { }
