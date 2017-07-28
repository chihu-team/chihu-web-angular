import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports:[WorkComponent],
  declarations: [WorkComponent]
})
export class WorkModule { }
