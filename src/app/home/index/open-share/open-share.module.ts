import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenShareComponent } from './open-share.component';
import { OpenShareRoutingModule } from './open-share-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OpenShareRoutingModule
  ],
  declarations: [OpenShareComponent]
})
export class OpenShareModule { }
