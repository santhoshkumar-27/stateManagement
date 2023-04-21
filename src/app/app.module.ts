import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountershowComponent } from './counter/countershow/countershow.component';
import { CounteroutputComponent } from './counter/counteroutput/counteroutput.component';
import { CounterbuttonComponent } from './counter/counterbutton/counterbutton.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { CustomCounterInputComponent } from './counter/custom-counter-input/custom-counter-input.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModelpopComponent } from './modelpop/modelpop.component';
import { ConfirmServiceService } from './confirm-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CountershowComponent,
    CounteroutputComponent,
    CounterbuttonComponent,
    CustomCounterInputComponent,
    ModelpopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      counter: counterReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    NgbModule,
  ],
  providers: [ConfirmServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  static injector: Injector;

  constructor(private injector: Injector) {
    AppModule.injector = injector;
  }
 }
