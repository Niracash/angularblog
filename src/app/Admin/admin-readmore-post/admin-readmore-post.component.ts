import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditPost } from 'src/app/Models/edit-post.model';
import { Post } from 'src/app/Models/post.model';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-admin-readmore-post',
  templateUrl: './admin-readmore-post.component.html',
  styleUrls: ['./admin-readmore-post.component.scss']
})
export class AdminReadmorePostComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  post:Post| undefined;


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');

        if(id){
          this.postService.getPostById(id).subscribe(
            res => {
              this.post = res;
            }
          )

        }
      }
    )
  }

  onSubmit():void{
    const editPost: EditPost = {
      blogAuthor: this.post?.blogAuthor,
      blogTitle: this.post?.blogTitle,
      blogContent: this.post?.blogContent,
      blogImageUrl: this.post?.blogImageUrl,
      blogSummary: this.post?.blogSummary,
      publishedDate: this.post?.publishedDate,
      editedDate: this.post?.editedDate,
      visible: this.post?.visible,
      urlHandle: this.post?.urlHandle,

    }
    this.postService.editPost(this.post?.id, editPost)
    .subscribe(
      response => {
        alert('sucessfully updated the blog')
      }
    )
  }

  deletePost():void{
    this.postService.deletePost(this.post?.id).subscribe(
      res => {
        alert('Deleted successfully!');
      }
    )
  }
}
