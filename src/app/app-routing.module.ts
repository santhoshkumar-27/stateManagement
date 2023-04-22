import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountershowComponent } from './counter/countershow/countershow.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './post/posts/posts.component';
import { AddPostComponent } from './post/add-post/add-post.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CountershowComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'post',
    component: PostsComponent,
  },
  {
    path: 'add-post',
    component: AddPostComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
