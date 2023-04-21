import { Component, OnInit } from '@angular/core';
import { ModelpopComponent } from './modelpop/modelpop.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  @myDecorator('Delete confirmation', 'sat', 'modalService')
  myMethod(): void {
    console.log('Hello, world!');
  }
}


function myDecorator(a: string, b?: string, model: NgbModal) {
  const dialogref = new ModelpopComponent(model)
  function actualDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Calling method ${propertyKey}`);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  }
   // return the decorator
   return actualDecorator;
}