import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueComponent } from './que.component';
import { QueRoutingModule } from './que-routing.module';
import { NoDataModule } from '../../../components/home/no-data/no-data.module';

@NgModule({
  imports: [
    CommonModule,
    QueRoutingModule,
    NoDataModule
  ],
  declarations: [QueComponent]
})
export class QueModule { }
