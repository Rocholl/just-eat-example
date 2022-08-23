import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';
import { Post } from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-axios-example';

  posts: Post[] = [];
  currentPost:Post={id:0,title:'',author:'',body:''};
  public post: Post={id:0,title:'',author:'',body:''};
  constructor(private postService: PostsService) {
    this.getPosts();
  }
  public getPosts(){
    this.postService.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }
  public deletePost(id: number) {
    console.log(id);
    this.postService.deletePosts(id).subscribe((res) => {
      this.posts = this.posts.filter((post) => post.id !== id);
    });
  }
  public createPost() {
    this.post.id=this.posts.length+3;
    if(this.post){
      this.postService.createPosts(this.post).subscribe((res)=>{
        this.posts.push(res);
        console.log(this.posts)

      })
    }

  }
  public editPost(post:Post){
    this.currentPost=post;
  }
  public editCurrentPost(){
    this.postService.updatePosts(this.currentPost).subscribe((res)=>{
      this.posts=this.posts.map((post)=>{
        if(post.id===this.currentPost.id){
          return res;
        }
        return post;
      }
      )
      this.currentPost= {id:0,title:'',author:'',body:''};
    }
    )
  }
}
