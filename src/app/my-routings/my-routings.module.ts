import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
// import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MyReposComponent } from '../my-repos/my-repos.component';
const appRoutes: Routes = [

  {path: '', component:ProfileComponent},
  {path: 'profile', component:ProfileComponent},
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