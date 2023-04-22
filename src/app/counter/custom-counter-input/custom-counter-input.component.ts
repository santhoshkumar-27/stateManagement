import { Component, OnInit } from '@angular/core';
import { Counter } from '../state/counter.interface';
import { Store } from '@ngrx/store';
import { customIncrementAction, customDecrementAction, changeProjectNameAction, projectNameReset } from '../state/counter.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  increment(value: any) {
    value = parseFloat(value);
    this.store.dispatch(customIncrementAction({value}))
  }
  decrement(value: any) {
    value = parseFloat(value);
    this.store.dispatch(customDecrementAction({value}))
  }
  onChangeProjectName(projectName: string) {
    this.store.dispatch(changeProjectNameAction({projectName}))
  }
  onProjectNameReset() {
    this.store.dispatch(projectNameReset())
  }
}
