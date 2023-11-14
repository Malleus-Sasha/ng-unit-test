import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Item, Product } from 'src/app/models/product.interface';
import { StockInventoryService } from 'src/app/services/stock-inventory/stock-inventory.service';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {
  products: Product[];

  productsMap!: Map<number, Product>;

  form = this.fb.group({
    store: this.fb.group({
      branch: '',
      code: ''
    }),
    selector: this.createStock({product_id: '', quantity: 10}),
    stock: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,
    private stockService: StockInventoryService
  ) {}

  ngOnInit() {

    const cart$ = this.stockService.getCartItems();
    const products$ = this.stockService.getProducts();

    forkJoin([cart$, products$]).subscribe(([cart, products]: [Item[], Product[]]) => {
      const mapInfo = products.map<[number, Product]>(product => [product.id, product]);
      this.products = [...products];
      this.productsMap = new Map<number, Product>(mapInfo);
      cart.forEach(item => this.addStock(item));
    });
  }

  // :Item
  createStock(stock: any) {
    return this.fb.group({
      product_id: (parseInt(stock?.product_id, 10) || ''),
      quantity: (stock?.quantity || 10)
    });
  }

  addStock(stock: Item) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup, index: number }) {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}
