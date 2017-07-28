import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { IheaderModule } from '../../components/home/iheader/iheader.module';
import { HomeComponent } from './home/home.component';
import { CardModule } from '../../components/home/card/card.module';
import { SideBarModule } from '../../components/home/side-bar/side-bar.module';
import { WorkComponent } from './work/work.component';
import { StepsModule } from '../../components/home/steps/steps.module';
import { FoodModule } from '../../components/home/food/food.module';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    IheaderModule,
    CardModule,
    SideBarModule,
    StepsModule,
    FoodModule
  ],
  declarations: [IndexComponent, HomeComponent, WorkComponent]
})
export class IndexModule { }
