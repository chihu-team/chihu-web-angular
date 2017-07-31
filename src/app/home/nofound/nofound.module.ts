import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NofoundComponent } from './nofound.component';
import { NofoundRoutingModule } from './nofound-routing.module';
import { IheaderModule } from '../../components/home/iheader/iheader.module';

@NgModule({
  imports: [
    CommonModule,
    NofoundRoutingModule,
    IheaderModule
  ],
  declarations: [NofoundComponent]
})
export class NofoundModule { }
