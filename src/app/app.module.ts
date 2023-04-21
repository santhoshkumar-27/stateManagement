import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountershowComponent } from './counter/countershow/countershow.component';
import { CounteroutputComponent } from './counter/counteroutput/counteroutput.component';
import { CounterbuttonComponent } from './counter/counterbutton/counterbutton.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CountershowComponent,
    CounteroutputComponent,
    CounterbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      counter: counterReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
