import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Models/post.model';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-user-gotopost',
  templateUrl: './user-gotopost.component.html',
  styleUrls: ['./user-gotopost.component.scss']
})
export class UserGotopostComponent implements OnInit {

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }
post: Post|undefined;
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params =>
      {
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

}
