import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { PhotoList } from './components/photo-list.component';
import { SidePanel } from './components/side-panel.component';
import { NavBar } from './components/nav-bar.component';
import { Register} from './components/register.component';
import { Login } from './components/login.component';
import { MyAlbum } from './components/my-album.component';
import { AddPhoto } from './components/add-photo.component';
import { ImageDetail } from './components/image-detail.component';
import { ImageComments } from './components/image-comments.component';
import { PhotoRow } from './components/photo-row.component';

import { PhotoService } from './services/photo.service';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { UploadPhotoService } from './services/upload-photo.service';
import { AddPhotoService } from './services/add-photo.service';
import { CommentService } from './services/comment.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoList,
    SidePanel,
    NavBar,
    Register,
    Login,
    MyAlbum,
    AddPhoto,
    ImageDetail,
    ImageComments,
    PhotoRow
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    PhotoService,
    RegisterService,
    LoginService,
    UserService,
    UploadPhotoService,
    AddPhotoService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
