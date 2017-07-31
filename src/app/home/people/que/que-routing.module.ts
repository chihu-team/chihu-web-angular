import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueComponent } from './que.component';

const routes: Routes = [{
  path:'',
  component:QueComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueRoutingModule { }
