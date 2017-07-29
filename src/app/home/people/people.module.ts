import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { IheaderModule } from '../../components/home/iheader/iheader.module';

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    IheaderModule
  ],
  declarations: [PeopleComponent]
})
export class PeopleModule { }
