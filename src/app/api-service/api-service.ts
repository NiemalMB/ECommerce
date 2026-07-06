import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getAllproducts(){
    return this.http.get('https://fakestoreapi.com/products');
  }
  getSingleProduct(id: any){
 return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
