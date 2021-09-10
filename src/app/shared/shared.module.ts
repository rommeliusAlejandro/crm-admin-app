import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    NavBarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class SharedModule {
}
