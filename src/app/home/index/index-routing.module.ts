import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', loadChildren: 'app/home/index/home/home.module#HomeModule' },
      { path: 'home', loadChildren: 'app/home/index/home/home.module#HomeModule' },
      { path: 'share', loadChildren: 'app/home/index/share/share.module#ShareModule' },
      { path: 'work/:id', loadChildren: 'app/home/index/work/work.module#WorkModule' },
      { path: 'open-share/:id', loadChildren: 'app/home/index/open-share/open-share.module#OpenShareModule' },
      { path: 'article', loadChildren: 'app/home/index/article/article.module#ArticleModule' },
      { path: 'open-article/:id', loadChildren: 'app/home/index/open-article/open-article.module#OpenArticleModule' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
