import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countershow',
  templateUrl: './countershow.component.html',
  styleUrls: ['./countershow.component.scss']
})
export class CountershowComponent implements OnInit {
  counter = 0;
  constructor() { }

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
