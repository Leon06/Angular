import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;//@Input Componente hijo y significa que la propiedad puede recibir su valor del Padre Conecta de padre a hijo
  @Output() addToCartClick = new EventEmitter<Product>();//Conecta de  hijo a padre 
  constructor() { }

  ngOnInit(): void {
  }

  onClick():void{
    this.addToCartClick.emit(this.product)
  }

}
