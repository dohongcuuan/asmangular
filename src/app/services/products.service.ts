import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from"rxjs"
import { IProduct } from '../interfaces/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<any>{
    return this.http.get(`http://localhost:3000/products`)
  }
  addProduct(product:IProduct):Observable<any>{
    return this.http.post(`http://localhost:3000/products`, product)
  }
  deleteProduct(id:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  getProductById(id:any):Observable<any>{
    return this.http.get(`http://localhost:3000/products/${id}`)
  }
  updateProduct(product:IProduct):Observable<any>{
    return this.http.patch(`http://localhost:3000/products/${product.id}`,product)
  }
}