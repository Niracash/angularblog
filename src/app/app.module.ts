import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { AdminPostsComponent } from './Admin/admin-posts/admin-posts.component'
import { FormsModule } from '@angular/forms';
import { AdminReadmorePostComponent } from './Admin/admin-readmore-post/admin-readmore-post.component';
import { AdminCreatePostComponent } from './Admin/admin-create-post/admin-create-post.component';
import { UserHomepageComponent } from './User/user-homepage/user-homepage.component';
import { UserGotopostComponent } from './User/user-gotopost/user-gotopost.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPostsComponent,
    AdminReadmorePostComponent,
    AdminCreatePostComponent,
    UserHomepageComponent,
    UserGotopostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
