import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { IheaderModule } from '../../components/home/iheader/iheader.module';
import { ForkUserComponent } from './fork-user/fork-user.component';
import { ShareComponent } from './share/share.component';
import { WorkComponent } from './work/work.component';
import { ArticleComponent } from './article/article.component';
import { QueComponent } from './que/que.component';
import { ForkQueComponent } from './fork-que/fork-que.component';

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    IheaderModule
  ],
  declarations: [PeopleComponent, ForkUserComponent, ShareComponent, WorkComponent, ArticleComponent, QueComponent, ForkQueComponent]
})
export class PeopleModule { }
