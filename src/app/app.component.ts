import { Component, OnInit } from '@angular/core';
import { ModelpopComponent } from './shared/components/modelpop/modelpop.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Confirmable, actualDecorator } from './shared/decorators/confirmable.decorator';
import { AppState } from './state/app.state';
import { Store } from '@ngrx/store';
import { sharedErrorSelector, sharedLoadingSelector } from './shared/state/shared.selector';
import { autoLoginAction } from './auth/state/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadingInformation$ = this.store.select(sharedLoadingSelector);
  errorInformation$ = this.store.select(sharedErrorSelector)
  constructor(private store: Store<AppState>) {}
  title = 'stateManagement';
  ngOnInit(): void {
    // this.myMethod('abce');
    this.store.dispatch(autoLoginAction())
  }
  // @Confirmable({title: 'Delete Confirmation', decription: 'Are you sure you want to delete?'})
  // @actualDecorator
  myMethod(data: string): void {
    console.log('Hello, world!', data);
  }
}