import { Component } from '@angular/core';
import {User} from '../models/user';
import {Photo} from '../models/photo';
import {PhotoService} from '../services/photo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'photo-list',
  templateUrl: './photo-list.component.html'
})
export class PhotoList {
  photos: Photo[];
  selectedPhoto: Photo;

  constructor(private photoService: PhotoService, private router: Router)
  {
    this.photoService.getPhotos().subscribe(
      data => console.log(this.photos = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }

 onSelect(photo:Photo) {
    this.selectedPhoto = photo;
    this.router.navigate(['/image-detail', this.selectedPhoto.photoId]);
  }
}
