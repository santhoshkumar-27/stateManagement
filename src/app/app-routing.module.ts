import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountershowComponent } from './counter/countershow/countershow.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './post/posts/posts.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  // {
  //   path: 'counter',
  //   component: CountershowComponent,
  // },
  {
    path: 'counter',
    canActivate: [AuthGuard],
    loadChildren: () => import('./counter/counter/counter.module').then(m => m.CounterModule),
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
  },
  {
    path: 'post',
    canActivate: [AuthGuard],
    loadChildren: () => import('./post/post/post.module').then(m => m.PostModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  // {
  //   path: 'post',
  //   component: PostsComponent,
  // },
  // {
  //   path: 'add-post',
  //   component: AddPostComponent,
  // },
  // {
  //   path: 'edit/:id',
  //   component: AddPostComponent,
  // },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
