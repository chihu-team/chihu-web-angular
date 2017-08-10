import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoswipeComponent } from './photoswipe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[PhotoswipeComponent],
  declarations: [PhotoswipeComponent]
})
export class PhotoswipeModule { }
