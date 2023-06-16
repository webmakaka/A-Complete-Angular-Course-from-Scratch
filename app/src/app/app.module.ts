import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/header/header.component';
import { TopHeaderComponent } from 'src/app/header/top--header/topHeader.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './product-list/search/search.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [
    AppComponent,
    TopHeaderComponent,
    HeaderComponent,
    ProductListComponent,
    SearchComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
