import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.scss']
})
export class CounterbuttonComponent implements OnInit {
  @Output() decrement: EventEmitter<any> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();
  @Output() increment: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
}
