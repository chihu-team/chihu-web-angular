import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenArticleComponent } from './open-article.component';
import { ResolveArticleService } from '../../../app-routes/resolve-article.service';

const routes: Routes = [{
  path:'',
  component:OpenArticleComponent,
  resolve:{
    data: ResolveArticleService
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenArticleRoutingModule { }
