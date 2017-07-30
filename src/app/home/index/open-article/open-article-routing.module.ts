import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenArticleComponent } from './open-article.component';

const routes: Routes = [{
  path:'',
  component:OpenArticleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenArticleRoutingModule { }
