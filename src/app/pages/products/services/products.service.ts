import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'// estara disponible para toda la aplicacion
})

export class ProductsService {
  private apiURL = 'http://localhost:3000/products';
  
  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{ // la interfas que creamos
    return this.http.get<Product[]>(this.apiURL);
  }

}
