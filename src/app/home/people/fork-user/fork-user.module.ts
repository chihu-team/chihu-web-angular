import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForkUserComponent } from './fork-user.component';
import { ForkUserRoutingModule } from './fork-user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ForkUserRoutingModule
  ],
  declarations: [ForkUserComponent]
})
export class ForkUserModule { }
