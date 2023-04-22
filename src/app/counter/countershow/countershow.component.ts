import { Component, OnInit } from '@angular/core';
import { Counter } from '../state/counter.interface';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { getProjectName } from '../state/counter.selector';

@Component({
  selector: 'app-countershow',
  templateUrl: './countershow.component.html',
  styleUrls: ['./countershow.component.scss']
})
export class CountershowComponent implements OnInit {
  counter = 0;
  profileName$ = this.store.select(getProjectName)
  .pipe(
    tap(
      (response) => console.log('profile name', response)
    )
  );
  constructor(private store: Store<{counter: Counter}>) { }

  ngOnInit(): void {
  }
  onDrecement() {
    --this.counter;
  }
  onIncrement() {
    ++this.counter;
  }
  onReset() {
    this.counter = 0;
  }
}
