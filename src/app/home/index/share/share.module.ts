import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
import { ShareRoutingModule } from './share-routing.module';
import { ShareCardModule } from '../../../components/home/share-card/share-card.module';

@NgModule({
  imports: [
    CommonModule,
    ShareRoutingModule,
    ShareCardModule
  ],
  declarations: [ShareComponent]
})
export class ShareModule { }
