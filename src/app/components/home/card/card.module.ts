import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[CardComponent],
  declarations: [CardComponent]
})
export class CardModule { }
