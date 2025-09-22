import { Component } from '@angular/core';
import { Product } from 'src/Models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productList: Product[] = [];

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getAllProducts().subscribe(data => {
      this.productList = data;
      console.log(this.productList);
    })
  }
}
