import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotWorkComponent } from './hot-work.component';
import { HotWorkRoutingModule } from './hot-work-routing.module';
import { CardModule } from '../../../components/home/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    HotWorkRoutingModule,
    CardModule
  ],
  declarations: [HotWorkComponent]
})
export class HotWorkModule { }
