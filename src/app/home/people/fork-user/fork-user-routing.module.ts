import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForkUserComponent } from './fork-user.component';

const routes: Routes = [{
  path:'',
  component:ForkUserComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForkUserRoutingModule { }
