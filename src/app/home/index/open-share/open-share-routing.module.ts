import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenShareComponent } from './open-share.component';
import { ResolveShareService } from '../../../app-routes/resolve-share.service';

const routes: Routes = [{
  path:'',
  component:OpenShareComponent,
  resolve:{
    data: ResolveShareService
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenShareRoutingModule { }
