import { Component, OnInit } from '@angular/core';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { getLoginStatus, isAuthenticated } from '../auth/state/auth.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showLogin$ = this.store.select(isAuthenticated);
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

}
