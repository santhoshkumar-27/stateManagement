import { Component, OnInit } from '@angular/core';
import { ModelpopComponent } from './modelpop/modelpop.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Confirmable, actualDecorator } from './decorators/confirmable.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  title = 'stateManagement';
  ngOnInit(): void {
    this.myMethod('abce');
  }
  @Confirmable({title: 'Delete Confirmation', decription: 'Are you sure you want to delete?'})
  // @actualDecorator
  myMethod(data: string): void {
    console.log('Hello, world!', data);
  }
}