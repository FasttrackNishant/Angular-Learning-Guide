// Then update your service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ApiResponseModel, IProduct } from '../model/Model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://projectapi.gerasim.in/api/Products';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ApiResponseModel> {
    return this.http.get<IProduct[]>(this.apiUrl).pipe(
      map(response => ({
        message: "Products fetched successfully",
        result: true,
        data: response
      }))
    );
  }
}