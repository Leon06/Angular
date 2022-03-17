import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ProductsService } from './services/products.service';
import { Product} from './interfaces/product.interface'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  //interface Product    
  products! : Product[];
  constructor(private productSvc: ProductsService) { }

  ngOnInit(): void {  
    //llamamos al observable de products.service.ts 
    this.productSvc.getProducts()
    .pipe(
      tap( (products: Product[]) => this.products = products)
    )
    .subscribe()
  }

}
