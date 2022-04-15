import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MyRoutingRoutingModule } from './my-routing-routing.module';
import { Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

const appRoutes: Routes = [
  {path: '', component:ProfileComponent},
  {path: 'navbar', component:ProfileComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyRoutingRoutingModule
  ]
})
export class MyRoutingModule { }
