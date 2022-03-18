import { Injectable } from '@angular/core';
import { Product } from 'src/app/pages/products/interfaces/product.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  product: Product[]= [];//Aca es donde se guardan los productos que se agregan el carrito

  private cartSubject = new Subject<Product[]>();
  constructor() { }
}
