import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoDataComponent } from './no-data.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[NoDataComponent],
  declarations: [NoDataComponent]
})
export class NoDataModule { }
