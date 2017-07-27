import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { IheaderModule } from '../../components/home/iheader/iheader.module';
import { HomeComponent } from './home/home.component';
import { CardModule } from '../../components/home/card/card.module';
import { SideBarModule } from '../../components/home/side-bar/side-bar.module';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    IheaderModule,
    CardModule,
    SideBarModule
  ],
  declarations: [IndexComponent, HomeComponent]
})
export class IndexModule { }
