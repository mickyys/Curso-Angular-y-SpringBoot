import {Injectable} from '@angular/core';
import {Photo} from '../models/photo';
import {User} from '../models/user';
import {Http, Headers} from '@angular/http';


@Injectable()
export class PhotoService{
  constructor(private http:Http){}
  
  getPhotos() {
    let url = "http://localhost:8080/photo/allPhotos";
    return this.http.get(url);
  }

  getPhotoById (photoId: number) {
    let tokenUrl1 = "http://localhost:8080/rest/photo/photoId";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl1, JSON.stringify(photoId), {headers: headers1});
  }

  getPhotosByUser (user: User) {
    let tokenUrl1 = "http://localhost:8080/rest/photo/user";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl1, JSON.stringify(user), {headers: headers1});
  }

  updatePhoto(photo: Photo) {
    let tokenUrl1 = "http://localhost:8080/rest/photo/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl1, JSON.stringify(photo), {headers: headers1});
  }
}
