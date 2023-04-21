import { Component, OnInit } from '@angular/core';
import { ModelpopComponent } from './modelpop/modelpop.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Confirmable } from './decorators/confirmable.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  title = 'stateManagement';
  ngOnInit(): void {
    this.myMethod();
  }
  @Confirmable({title: 'Delete Confirmation', decription: 'Are you sure you want to delete?'})
  myMethod(): void {
    console.log('Hello, world!');
  }
}