import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { NoDataModule } from '../../../components/home/no-data/no-data.module';
import { AnswerCardModule } from '../../../components/home/answer-card/answer-card.module';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    NoDataModule,
    AnswerCardModule
  ],
  declarations: [ArticleComponent]
})
export class ArticleModule { }
