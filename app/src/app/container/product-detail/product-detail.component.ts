import { Component, Input, OnInit } from '@angular/core';
import { ProductListComponent } from 'src/app/container/product-list/product-list.component';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  @Input() productListComp: ProductListComponent = undefined;

  product: Product;

  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }
}
