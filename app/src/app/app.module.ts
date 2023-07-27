import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { SetBackground } from 'src/app/CustomDirectives/SetBackground.directive';
import { HeaderComponent } from 'src/app/header/header.component';
import { MainMenuComponent } from 'src/app/header/main-menu/main-menu.component';
import { TopHeaderComponent } from 'src/app/top--header/topHeader.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { SearchComponent } from './container/search/search.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [
    AppComponent,
    TopHeaderComponent,
    HeaderComponent,
    ContainerComponent,
    SearchComponent,
    MainMenuComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedBrandsComponent,
    SetBackground,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
