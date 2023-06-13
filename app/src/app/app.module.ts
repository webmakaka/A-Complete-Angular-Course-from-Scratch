import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from 'src/app/header/header.component';
import { TopHeaderComponent } from 'src/app/header/top--header/topHeader.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, TopHeaderComponent, HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
