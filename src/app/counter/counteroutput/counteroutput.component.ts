import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Counter } from '../state/counter.interface';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
  counter$: Observable<Counter> = this.store.select('counter')
    .pipe(
      tap(
        (response) => console.log('response', response)
      )
    );
  constructor(private store: Store<{ counter: Counter }>) { }

  ngOnInit(): void {
  }

}
