import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-my-repos',
  templateUrl: './my-repos.component.html',
  styleUrls: ['./my-repos.component.css']
})
export class MyReposComponent implements OnInit {

  user: any= [];
  repos: any= [];
  username!: string;
  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }
  ngOnInit() {
  }
   searchUser() {
     this._githubService.updateUser(this.username);
     this._githubService.getUser().subscribe(user => {
       this.user = user;
     });
     this._githubService.getRepos().subscribe(repos => {
       this.repos = repos;
     });

   }
}
