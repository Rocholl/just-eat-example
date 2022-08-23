import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/model/post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post| any;
  @Output() deletePosts = new EventEmitter<number>();
  @Output() editPosts = new EventEmitter<number>();
  edit:boolean=false;
  constructor() {
   }

  ngOnInit(): void {
  }
  public deletePost(){
    this.deletePosts.emit(this.post.id);
  }
  public editPost(){
    this.editPosts.emit(this.post.id);
  }
}
