import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { sharedLoadingSelector } from '../../state/shared.selector';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  loadingInformation$ = this.store.select(sharedLoadingSelector)
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

}
