import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../../../../Models/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  newProduct: any = {
    id: null,
    name: '',
    description: '',
    price: null,
    catId: null,
  };

  constructor(private service: ProductService, private router: Router) { }

  addProduct(form: any) {
    console.log('called');
    this.newProduct = {
      id: Number(form.Id),
      name: form.name,
      description: form.description,
      price: form.price,
      catId: form.categoryId,
    };
    this.service.addNewProduct(this.newProduct).subscribe(
      response => {
        alert("Product Added Successfully");
        this.router.navigate(['/product-list']);
      },
      error => {
        console.error('Error adding product:', error);
        alert("There was an error adding the product. Please try again.");
      }
    );
    alert("Product Added Successfully")
  }

}



