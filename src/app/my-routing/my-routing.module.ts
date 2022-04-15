import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MyRoutingRoutingModule } from './my-routing-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
// import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MyReposComponent } from '../my-repos/my-repos.component';
const appRoutes: Routes = [
  {path: 'profile', component:ProfileComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'my-repos', component:MyReposComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class MyRoutingModule { }
