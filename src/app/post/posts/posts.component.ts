import { Component, OnInit } from '@angular/core';
import { Post } from '../state/post.interface';
import { Store } from '@ngrx/store';
import { getPostList } from '../state/post.selector';
import { AppState } from 'src/app/state/app.state';
import { deletePost, getPostListAction } from '../state/post.action';
import { Confirmable } from 'src/app/decorators/confirmable.decorator';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postList$ = this.store.select(getPostList);
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getPostListAction())
  }
  @Confirmable({
    title: 'Delete confirmation',
    decription: 'Are you sure you want to delete?',
    leftSideButton: 'Cancel',
    rightSideButton: 'Delete',
  })
  onDelete(id: any) {
    this.store.dispatch(deletePost({id}))
  }
}
