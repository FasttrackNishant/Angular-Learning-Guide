import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { ApiResponseModel, IProduct } from '../../core/model/Model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productService = inject(ProductService);
  productList: IProduct[] = [];

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((res: ApiResponseModel) => {
      console.log(res);
      
      this.productList = res.data;
      console.log(res);
    }, error => {
      alert("Erro from  Api");
    })
  }

}
