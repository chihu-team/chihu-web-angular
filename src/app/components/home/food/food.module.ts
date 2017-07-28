import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodComponent } from './food.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[FoodComponent],
  declarations: [FoodComponent]
})
export class FoodModule { }
