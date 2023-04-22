import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Counter } from '../state/counter.interface';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selector';

@Component({
  selector: 'app-counteroutput',
  templateUrl: './counteroutput.component.html',
  styleUrls: ['./counteroutput.component.scss']
})
export class CounteroutputComponent implements OnInit {
  // counter: any;
  // @Input()
  // get inputOfCounter() {
  //   return this.counter;
  // }
  // set inputOfCounter(value) {
  //   this.counter = value
  // }
  counter$: Observable<Number> = this.store.select(getCounter)
    // .pipe(
    //   tap(
    //     (response) => console.log('counter update', response)
    //   )
    // );
  // when were we updating the state of counter object during counter update the projectName also get subscribed
  // this will also cause the performance issues so we need to use createSelector and createFeatureSelector
  constructor(private store: Store<{ counter: Counter }>) { }

  ngOnInit(): void {
  }

}
