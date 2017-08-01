import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { WorkRoutingModule } from './work-routing.module';
import { NoDataModule } from '../../../components/home/no-data/no-data.module';
import { CardModule } from '../../../components/home/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    WorkRoutingModule,
    NoDataModule,
    CardModule
  ],
  declarations: [WorkComponent]
})
export class WorkModule { }
