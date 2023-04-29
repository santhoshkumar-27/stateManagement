import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { sharedErrorSelector } from '../../state/shared.selector';
import { errorEndAction } from '../../state/shared.action';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  errorMessage$ = this.store.select(sharedErrorSelector)
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }
  onCloseToaster() {
    this.store.dispatch(errorEndAction())
  }
}
