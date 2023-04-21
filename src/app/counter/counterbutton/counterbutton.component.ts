import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Counter } from '../state/counter.interface';
import { decrementAction, incrementAction, resetAction } from '../state/counter.actions';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.scss']
})
export class CounterbuttonComponent implements OnInit {
  @Output() decrement: EventEmitter<any> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();
  @Output() increment: EventEmitter<any> = new EventEmitter();
  constructor(private store: Store<{counter: Counter}>) { }

  ngOnInit(): void {
  }
  onDecrement() {
    this.store.dispatch(decrementAction())
    // this.decrement.emit();
  }
  onIncreament() {
    this.store.dispatch(incrementAction())
    // this.increment.emit();
  }
  onReset() {
    this.store.dispatch(resetAction())
    // this.reset.emit();
  }
}
