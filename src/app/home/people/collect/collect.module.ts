import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectComponent } from './collect.component';
import { CollectRoutingModule } from './collect-routing.module';
import { NoDataModule } from '../../../components/home/no-data/no-data.module';

@NgModule({
  imports: [
    CommonModule,
    CollectRoutingModule,
    NoDataModule
  ],
  declarations: [CollectComponent]
})
export class CollectModule { }
