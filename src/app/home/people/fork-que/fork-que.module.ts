import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForkQueComponent } from './fork-que.component';
import { ForkQueRoutingModule } from './fork-que-routing.module';
import { NoDataModule } from '../../../components/home/no-data/no-data.module';

@NgModule({
  imports: [
    CommonModule,
    ForkQueRoutingModule,
    NoDataModule
  ],
  declarations: [ForkQueComponent]
})
export class ForkQueModule { }
