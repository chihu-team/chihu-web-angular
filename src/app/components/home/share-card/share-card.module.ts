import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShareCardComponent } from './share-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ShareCardComponent],
  declarations: [ShareCardComponent]
})
export class ShareCardModule { }
