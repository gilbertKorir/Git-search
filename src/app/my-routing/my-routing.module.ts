import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MyRoutingRoutingModule } from './my-routing-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
// import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from '../navbar/navbar.component';

const appRoutes: Routes = [
  {path: '', component:ProfileComponent},
  {path: 'navbar', component:NavbarComponent}
];

@NgModule({
  declarations: [
    // HighlightDirective,
    // ProfileComponent,
    // NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class MyRoutingModule { }
