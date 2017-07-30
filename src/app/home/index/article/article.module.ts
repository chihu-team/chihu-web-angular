import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { AnswerCardModule } from '../../../components/home/answer-card/answer-card.module';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    AnswerCardModule
  ],
  declarations: [ArticleComponent]
})
export class ArticleModule { }
