import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCreatePostComponent } from './Admin/admin-create-post/admin-create-post.component';
import { AdminPostsComponent } from './Admin/admin-posts/admin-posts.component';
import { AdminReadmorePostComponent } from './Admin/admin-readmore-post/admin-readmore-post.component';
import { UserGotopostComponent } from './User/user-gotopost/user-gotopost.component';
import { UserHomepageComponent } from './User/user-homepage/user-homepage.component';

const routes: Routes = [
  {
    path: '',
    component: UserHomepageComponent
  },
  {
    path: 'post/:id',
    component: UserGotopostComponent
  },
  {
    path: 'admin/posts',
    component: AdminPostsComponent
  },
  {
    path:'admin/posts/add',
    component: AdminCreatePostComponent
  },
  {
    path:'admin/posts/:id',
    component: AdminReadmorePostComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
