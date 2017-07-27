import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IheaderComponent } from './iheader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[IheaderComponent],
  declarations: [IheaderComponent]
})
export class IheaderModule { }
