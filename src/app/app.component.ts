import { Component, OnInit } from '@angular/core';
import { ModelpopComponent } from './modelpop/modelpop.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Confirmable, actualDecorator } from './decorators/confirmable.decorator';
import { AppState } from './state/app.state';
import { Store } from '@ngrx/store';
import { sharedLoadingSelector } from './shared/state/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadingInformation$ = this.store.select(sharedLoadingSelector)
  constructor(private store: Store<AppState>) {}
  title = 'stateManagement';
  ngOnInit(): void {
    // this.myMethod('abce');
  }
  // @Confirmable({title: 'Delete Confirmation', decription: 'Are you sure you want to delete?'})
  // @actualDecorator
  myMethod(data: string): void {
    console.log('Hello, world!', data);
  }
}