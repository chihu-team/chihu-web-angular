import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForkQueComponent } from './fork-que.component';
import { ForkQueRoutingModule } from './fork-que-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ForkQueRoutingModule
  ],
  declarations: [ForkQueComponent]
})
export class ForkQueModule { }
