import { Component, OnInit } from '@angular/core';
import { Post } from '../state/post.interface';
import { Store } from '@ngrx/store';
import { getPostList } from '../state/post.selector';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postList$ = this.store.select(getPostList);
  constructor(private store: Store<{post: Post}>) { }

  ngOnInit(): void {
  }

}
