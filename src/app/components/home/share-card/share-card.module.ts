import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareCardComponent } from './share-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ShareCardComponent],
  declarations: [ShareCardComponent]
})
export class ShareCardModule { }
