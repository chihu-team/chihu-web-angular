import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenArticleComponent } from './open-article.component';
import { OpenArticleRoutingModule } from './open-article-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OpenArticleRoutingModule
  ],
  declarations: [OpenArticleComponent]
})
export class OpenArticleModule { }
