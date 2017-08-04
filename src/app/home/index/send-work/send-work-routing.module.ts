import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendWorkComponent } from './send-work.component';

const routes: Routes = [{
  path:'',
  component:SendWorkComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendWorkRoutingModule { }
