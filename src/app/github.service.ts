import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map'
import { map } from "rxjs/operators"; 
import {User} from './user';
import {Repos} from './repos';
import {environment} from '../environments/environment';



@Injectable()
export class GithubService {
  username: string;
  // result:any

  constructor(private _http: HttpClient) {
    console.log('Github Service Ready...');
    this.username =  'gilbertKorir';

  }
  getUser() {
    return this._http.get('https://api.github.com/users/' + this.username)
    map((result: any) => result);

  }
  getRepos() {
    return this._http.get(' https://api.github.com/users/' + this.username + '/repos')
    map((result: any) => result);
}
updateUser(username: string) {
  this.username = username;
}
}