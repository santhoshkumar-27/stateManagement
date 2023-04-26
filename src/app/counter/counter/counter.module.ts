import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterbuttonComponent } from '../counterbutton/counterbutton.component';
import { CounteroutputComponent } from '../counteroutput/counteroutput.component';
import { CountershowComponent } from '../countershow/countershow.component';
import { CustomCounterInputComponent } from '../custom-counter-input/custom-counter-input.component';


@NgModule({
  declarations: [
    CountershowComponent,
    CounteroutputComponent,
    CounterbuttonComponent,
    CustomCounterInputComponent,
  ],
  imports: [
    CommonModule,
    CounterRoutingModule
  ]
})
export class CounterModule { }
