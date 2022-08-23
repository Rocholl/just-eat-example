import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class PostsService {
  private url:string= "http://localhost:3000/"
  constructor(private http:HttpClient) { }
  public getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.url+'posts');
  }
  public createPosts(post:Post):Observable<Post>{
    return this.http.post<Post>(this.url+'posts',post);
  }
  public deletePosts(id:number):Observable<Post>{
    return this.http.delete<Post>(this.url+'posts/'+id);
  }
  public updatePosts(post:Post):Observable<Post>{
    return this.http.put<Post>(this.url+'posts/'+post.id,post);
  }
}
