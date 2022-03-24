import { Injectable } from '@angular/core';
import { Product } from 'src/app/pages/products/interfaces/product.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {
  products: Product[]= [];//Aca es donde se guardan los productos que se agregan el carrito

  private cartSubject = new Subject<Product[]>();//observable
  private totalSubject = new Subject<number>();
  private quantitySubject = new Subject<number>();

  get totalAction$(): Observable<number> {//por convencion se utiliza el signo $ cuando utilizamos observables
    return this.totalSubject.asObservable();
  }

  get quantityAction$(): Observable<number>{//por convencion se utiliza el signo $ cuando utilizamos observables
    return this.quantitySubject.asObservable();
  }

  get cartAction$(): Observable<Product[]>{//por convencion se utiliza el signo $ cuando utilizamos observables
    return this.cartSubject.asObservable();
  }

  updateCart(product:Product):void{
    this.addToCart(product);
    this.quantityProducts();
    this.calcTotal();
  }

  //metodoss 
  private addToCart(product:Product):void{
    this.products.push(product);
    this.cartSubject.next(this.products);
  }

  private quantityProducts():void{
    const quantity = this.products.length;
    this.quantitySubject.next(quantity);
  }

  private calcTotal():void{
    const total = this.products.reduce((acc, prod)=> acc += prod.price, 0);
    this.totalSubject.asObservable();
  }



}
