import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenShareComponent } from './open-share.component';

const routes: Routes = [{
  path:'',
  component:OpenShareComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenShareRoutingModule { }
