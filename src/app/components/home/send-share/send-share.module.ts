import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendShareComponent } from './send-share.component';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    FormsModule
  ],
  exports:[SendShareComponent],
  declarations: [SendShareComponent]
})
export class SendShareModule { }
