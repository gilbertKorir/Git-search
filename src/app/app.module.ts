import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
// import "import 'rxjs/Rx';"
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HighlightDirective } from './highlight.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { MyRoutingModule } from './my-routing/my-routing.module';
import { GithubService } from './github.service';
import { DateCountPipe } from './date-count.pipe';

// const appRoutes: Routes = [];


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HighlightDirective,
    NavbarComponent,
    DateCountPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes),
    MyRoutingModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }