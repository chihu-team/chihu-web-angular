import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[StepsComponent],
  declarations: [StepsComponent]
})
export class StepsModule { }
