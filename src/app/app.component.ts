import { Component } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {GithubService} from './github.service';
import {ProfileComponent} from './profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent {
  title = 'git-search';
}

