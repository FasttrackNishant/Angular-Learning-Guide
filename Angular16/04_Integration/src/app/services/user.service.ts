import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/Model/Login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "http://localhost:5076/api/v1/User/1"

  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<any> {
    return this.http.get<UserModel>(this.apiURL);
  }
}
