import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectComponent } from './collect.component';
import { CollectRoutingModule } from './collect-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CollectRoutingModule
  ],
  declarations: [CollectComponent]
})
export class CollectModule { }
