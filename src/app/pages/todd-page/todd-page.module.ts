import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToddPageRoutingModule } from './todd-page-routing.module';
import { ToddPageComponent } from './todd-page.component';
import { FileSizePipe } from 'src/app/pipes/file-size/file-size.pipe';
import { ShowSizeComponent } from './show-size/show-size.component';
import { StockInventoryComponent } from './stock-inventory/containers/stock-inventory/stock-inventory.component';
import { StockBranchComponent } from './stock-inventory/components/stock-branch/stock-branch.component';
import { StockProductsComponent } from './stock-inventory/components/stock-products/stock-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StockSelectorComponent } from './stock-inventory/components/stock-selector/stock-selector.component';
import { StockCounterComponent } from './stock-inventory/components/stock-counter/stock-counter.component';
import { CounterComponent } from './counter/counter.component';
import { CreditCardDirective } from 'src/app/directives/credit-card/credit-card.directive';


@NgModule({
  declarations: [
    ToddPageComponent,
    FileSizePipe,
    CounterComponent,
    ShowSizeComponent,
    StockCounterComponent,
    StockInventoryComponent,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent,
    CreditCardDirective,
  ],
  imports: [
    CommonModule,
    ToddPageRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ToddPageModule { }
