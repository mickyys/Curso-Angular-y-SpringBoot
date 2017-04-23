import {User} from '../models/user';
import {Injectable} from '@angular/core';
import {Photo} from '../models/photo';
import {Http, Headers} from '@angular/http';

@Injectable()
export class UserService {
  users: User[];

  constructor (private http: Http) {}

  getUsers() {
  }

  getUserById(id: string) {
  }

  getUserByName(username: string) {
    let tokenUrl = "http://localhost:8080/rest/user/userName";
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl, username, {headers: headers});
  }
  
  updateUser(user: User) {
      let tokenUrl1 = "http://localhost:8080/rest/user/update";
      let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
      return this.http.post(tokenUrl1, JSON.stringify(user), {headers: headers1});
    }

}
