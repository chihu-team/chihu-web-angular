import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { AppComponent } from './app.component';
import { CanActivateService } from './app-routes/can-activate.service';
import { UserService } from './service/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [CanActivateService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
