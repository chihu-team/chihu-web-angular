import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { IheaderModule } from '../../components/home/iheader/iheader.module';
import { HomeComponent } from './home/home.component';
import { CardModule } from '../../components/home/card/card.module';
import { SideBarModule } from '../../components/home/side-bar/side-bar.module';
import { WorkComponent } from './work/work.component';
import { StepsModule } from '../../components/home/steps/steps.module';
import { FoodModule } from '../../components/home/food/food.module';
import { AnswerCardModule } from '../../components/home/answer-card/answer-card.module';
import { ShareCardModule } from '../../components/home/share-card/share-card.module';
import { ShareComponent } from './share/share.component';
import { OpenShareComponent } from './open-share/open-share.component';
import { ArticleComponent } from './article/article.component';
import { OpenArticleComponent } from './open-article/open-article.component';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    IheaderModule,
    CardModule,
    SideBarModule,
    StepsModule,
    FoodModule,
    ShareCardModule,
    AnswerCardModule
  ],
  declarations: [IndexComponent, HomeComponent, WorkComponent, ShareComponent, OpenShareComponent, ArticleComponent, OpenArticleComponent]
})
export class IndexModule { }
