import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueComponent } from './que.component';
import { QueRoutingModule } from './que-routing.module';

@NgModule({
  imports: [
    CommonModule,
    QueRoutingModule
  ],
  declarations: [QueComponent]
})
export class QueModule { }
