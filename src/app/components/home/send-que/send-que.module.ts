import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendQueComponent } from './send-que.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[SendQueComponent],
  declarations: [SendQueComponent]
})
export class SendQueModule { }
