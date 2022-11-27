import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post.model';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.scss']
})
export class UserHomepageComponent implements OnInit {

  constructor(
    private postService: PostService
  ) { }

  posts:Post[] = [];

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      res =>{
        console.log(this.posts);
        this.posts=res;

      }
    )
  }
}
