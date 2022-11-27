import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post.model';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit {

  constructor(
    //inject service
    private postService: PostService
  ) { }

  posts: Post[] = []

  ngOnInit(): void {
    //linking the angular service to api
    this.postService.getAllPosts()
    .subscribe(
      res =>{
        console.log(res);

      }
    )
  }
}
