import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { AppComponent } from './app.component';
import { CanActivateService } from './app-routes/can-activate.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpModule
  ],
  providers: [CanActivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
