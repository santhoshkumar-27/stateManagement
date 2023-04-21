import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Counter } from '../state/counter.interface';

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
  counter$  = this.store.select('counter');
  constructor(private store: Store<{counter: {counter: 0}}>) { }

  ngOnInit(): void {
  }

}
