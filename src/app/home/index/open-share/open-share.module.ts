import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenShareComponent } from './open-share.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[OpenShareComponent],
  declarations: [OpenShareComponent]
})
export class OpenShareModule { }
