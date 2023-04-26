import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountershowComponent } from '../countershow/countershow.component';

const routes: Routes = [
  {
    path: '',
    component: CountershowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
