import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/header/header.component';
import { MainMenuComponent } from 'src/app/header/main-menu/main-menu.component';
import { TopMenuComponent } from 'src/app/header/top-menu/top-menu.component';
import { TopHeaderComponent } from 'src/app/top--header/topHeader.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { ProductListComponent } from './container/product-list/product-list.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [
    AppComponent,
    TopHeaderComponent,
    HeaderComponent,
    ContainerComponent,
    SearchComponent,
    MainMenuComponent,
    TopMenuComponent,
    ProductListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
