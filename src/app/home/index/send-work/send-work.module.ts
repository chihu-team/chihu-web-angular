import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendWorkComponent } from './send-work.component';
import { SendWorkRoutingModule } from './send-work-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SendWorkRoutingModule
  ],
  exports:[SendWorkComponent],
  declarations: [SendWorkComponent]
})
export class SendWorkModule { }
