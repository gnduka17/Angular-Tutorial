import { Component, Input } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // @Input() public parentData;

  products = products;

  share() {
    window.alert('The product has been shared!');
  }

}
