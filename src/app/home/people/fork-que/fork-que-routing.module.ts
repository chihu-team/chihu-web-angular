import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForkQueComponent } from './fork-que.component';

const routes: Routes = [{
  path:'',
  component:ForkQueComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForkQueRoutingModule { }
