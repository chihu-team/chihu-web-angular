import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
import { ShareRoutingModule } from './share-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShareRoutingModule
  ],
  declarations: [ShareComponent]
})
export class ShareModule { }
