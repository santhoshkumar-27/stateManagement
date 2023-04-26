import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterbuttonComponent } from '../counterbutton/counterbutton.component';
import { CounteroutputComponent } from '../counteroutput/counteroutput.component';
import { CountershowComponent } from '../countershow/countershow.component';
import { CustomCounterInputComponent } from '../custom-counter-input/custom-counter-input.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../state/counter.reducer';
import { COUNTER_STATE_NAME } from '../state/counter.selector';


@NgModule({
  declarations: [
    CountershowComponent,
    CounteroutputComponent,
    CounterbuttonComponent,
    CustomCounterInputComponent,
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer)
  ]
})
export class CounterModule { }
