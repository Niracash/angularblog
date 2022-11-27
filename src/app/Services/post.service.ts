import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from '../Models/post.model';
import {Observable} from 'rxjs';
import { EditPost } from '../Models/edit-post.model';
import { CreatePost } from '../Models/create-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl;

  getAllPosts(): Observable<Post[]>{
    //'https://localhost:7012/api/Post'
    return this.http.get<Post[]>(this.apiUrl + '/api/Blogpost');
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(this.apiUrl + '/api/Blogpost/' + id);
  }

  editPost(id: string | undefined, editPost: EditPost): Observable<Post> {
    return this.http.put<Post>(this.apiUrl + '/api/Blogpost/' + id, editPost);
  }

  createPost(createPost: CreatePost): Observable<Post>{
    return this.http.post<Post>(this.apiUrl + '/api/Blogpost', createPost);
  }

  deletePost(id: string|undefined): Observable<Post>{
    return this.http.delete<Post>(this.apiUrl + '/api/Blogpost/' + id);
  }
}
