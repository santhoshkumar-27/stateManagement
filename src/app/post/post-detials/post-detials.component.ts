import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getPostById } from '../state/post.selector';

@Component({
  selector: 'app-post-detials',
  templateUrl: './post-detials.component.html',
  styleUrls: ['./post-detials.component.scss']
})
export class PostDetialsComponent implements OnInit {
  postDetails$ = this.store.select(getPostById)
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

}
