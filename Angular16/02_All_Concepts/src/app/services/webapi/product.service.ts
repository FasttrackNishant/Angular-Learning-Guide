import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from 'src/Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  url: string = 'http://localhost:5272/api/Products'

  httpOptions = { headers: new HttpHeaders({ 'content-type': 'application/json' }) };

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get<Product>(this.url);
  }

  //add new product post method
  addNewProduct(newProduct: Product): Observable<any> {
    console.log(newProduct);
    return this.http.post<Product>(this.url, newProduct);
  }

  //update product
  updateProduct(product: Product): Observable<any> {
    return this.http.put<Product>(this.url + "/" + product.id, product, this.httpOptions).pipe(catchError(this.handleError));
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(this.url + "/" + id);
  }

  deleteProduct(id: number): Observable<any>
  {
    return this.http.delete(this.url + "/" + id);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    errorMessage = error.status + '\n' + error.statusText + '\n' + error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
