import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  name = 'John Doe';
  product = {
    name: 'iPhone',
    price: 799,
    color: 'Red',
    discount: 8.5,
    inStock: 5,
    pImage: '/assets/images/iphone.webp',
  };

  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }
}
