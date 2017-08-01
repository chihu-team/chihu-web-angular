import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForkUserComponent } from './fork-user.component';
import { ForkUserRoutingModule } from './fork-user-routing.module';
import { NoDataModule } from '../../../components/home/no-data/no-data.module';

@NgModule({
  imports: [
    CommonModule,
    ForkUserRoutingModule,
    NoDataModule
  ],
  declarations: [ForkUserComponent]
})
export class ForkUserModule { }
