import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ArticleComponent],
  declarations: [ArticleComponent]
})
export class ArticleModule { }
