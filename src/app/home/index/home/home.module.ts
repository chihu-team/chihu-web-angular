import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardModule } from '../../../components/home/card/card.module';
import { SendShareModule } from '../../../components/home/send-share/send-share.module';
import { SendQueModule } from '../../../components/home/send-que/send-que.module';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    FileUploadModule,
    SendShareModule,
    SendQueModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
