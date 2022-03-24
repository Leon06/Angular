import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent{

  @Input() product!: Product;//@Input Componente hijo y significa que la propiedad puede recibir su valor del Padre/// Conecta de padre a hijo
  @Output() addToCartClick = new EventEmitter<Product>();//Conecta de  hijo a padre 
  
  onClick(): void {
    this.addToCartClick.emit(this.product);
  }

}
