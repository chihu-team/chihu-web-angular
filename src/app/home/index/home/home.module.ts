import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardModule } from '../../../components/home/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
