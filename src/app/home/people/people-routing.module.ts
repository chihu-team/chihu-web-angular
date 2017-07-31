import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people.component';
import { ResolvePeopleService } from '../../app-routes/resolve-people.service';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent,
    resolve:{
      data: ResolvePeopleService
    },
    children: [
      { path: '', loadChildren: 'app/home/people/work/work.module#WorkModule' },
      { path: 'work', loadChildren: 'app/home/people/work/work.module#WorkModule' },
      { path: 'share', loadChildren: 'app/home/people/share/share.module#ShareModule' },   
      { path: 'article', loadChildren: 'app/home/people/article/article.module#ArticleModule' },
      { path: 'que', loadChildren: 'app/home/people/que/que.module#QueModule' },   
      { path: 'collect', loadChildren: 'app/home/people/collect/collect.module#CollectModule' },   
      { path: 'fork-que', loadChildren: 'app/home/people/fork-que/fork-que.module#ForkQueModule' },    
      { path: 'fork-user', loadChildren: 'app/home/people/fork-user/fork-user.module#ForkUserModule' },    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
