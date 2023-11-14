import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent {
  @Input() parent: FormGroup;

  @Input() map: Map<number, Product>;

  @Output() remove = new EventEmitter<any>();

  getProduct(id: number) {
    return this.map.get(id);
  }
  
  removeProduct(group: any, index: number) {
    this.remove.emit({ group, index });
  }
  
  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }
}
