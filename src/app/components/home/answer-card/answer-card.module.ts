import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnswerCardComponent } from './answer-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[AnswerCardComponent],
  declarations: [AnswerCardComponent]
})
export class AnswerCardModule { }
