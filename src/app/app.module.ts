import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExecutiveModule } from './executive/executive.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ExecutiveModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
