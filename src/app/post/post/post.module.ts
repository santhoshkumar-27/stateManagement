import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { AddPostComponent } from '../add-post/add-post.component';
import { PostsComponent } from '../posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postReducer } from '../state/post.reducer';
import { POSTS_STATE_NAME } from '../state/post.selector';


@NgModule({
  declarations: [
    PostsComponent,
    AddPostComponent,

  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(POSTS_STATE_NAME, postReducer)

  ]
})
export class PostModule { }
