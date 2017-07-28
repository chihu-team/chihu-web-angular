import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ShareComponent],
  declarations: [ShareComponent]
})
export class ShareModule { }
