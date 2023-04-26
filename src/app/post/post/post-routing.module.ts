import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { PostsComponent } from '../posts/posts.component';
import { AddPostComponent } from '../add-post/add-post.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: PostsComponent
      },
      {
        path: 'add-post',
        component: AddPostComponent,
      },
      {
        path: 'edit/:id',
        component: AddPostComponent,
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
