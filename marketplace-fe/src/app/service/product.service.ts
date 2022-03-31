import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = 'http://localhost:3000/api/products/'

  constructor( private http: HttpClient) { 
  
  }

  getProducts(): Observable<any> {
    return this.http.get(this.url)
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(this.url+id)
  }
}
