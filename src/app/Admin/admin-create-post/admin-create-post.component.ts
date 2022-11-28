import { Component, OnInit } from '@angular/core';
import { CreatePost } from 'src/app/Models/create-post.model';
import { Post } from 'src/app/Models/post.model';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-admin-create-post',
  templateUrl: './admin-create-post.component.html',
  styleUrls: ['./admin-create-post.component.scss']
})
export class AdminCreatePostComponent implements OnInit {

  constructor(
    private postService: PostService
  ) { }

  post: CreatePost = {

      blogAuthor: '',
      blogTitle: '',
      blogContent: '',
      blogImageUrl: '',
      blogSummary: '',
      publishedDate: '',
      editedDate: '',
      visible: true,
      urlHandle: '',
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.postService.createPost(this.post).subscribe(
      res => {
        alert('News sucessfully created!');
      }
    )

  }
}
