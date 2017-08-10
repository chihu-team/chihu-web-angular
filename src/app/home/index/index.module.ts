import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { IheaderModule } from '../../components/home/iheader/iheader.module';
import { SideBarModule } from '../../components/home/side-bar/side-bar.module';
import { PhotoswipeModule } from '../../components/home/photoswipe/photoswipe.module';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    IheaderModule,
    SideBarModule,
    PhotoswipeModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
