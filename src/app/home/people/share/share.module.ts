import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
import { ShareRoutingModule } from './share-routing.module';
import { NoDataModule } from '../../../components/home/no-data/no-data.module';
import { ShareCardModule } from '../../../components/home/share-card/share-card.module';

@NgModule({
  imports: [
    CommonModule,
    ShareRoutingModule,
    NoDataModule,
    ShareCardModule
  ],
  declarations: [ShareComponent]
})
export class ShareModule { }
