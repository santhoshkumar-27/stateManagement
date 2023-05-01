import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SHARED_STATE_NAME } from './state/shared.state';
import { sharedReducer } from './state/shared.reducer';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ModelpopComponent } from './components/modelpop/modelpop.component';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    ErrorMessageComponent,
    ModelpopComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([]),
    StoreModule.forFeature(SHARED_STATE_NAME, sharedReducer)
  ],
  exports: [
    LoadingSpinnerComponent,
    ErrorMessageComponent,
    ModelpopComponent
  ]
})
export class SharedModule { }
