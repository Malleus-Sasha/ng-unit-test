import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToddPageRoutingModule } from './todd-page-routing.module';
import { ToddPageComponent } from './todd-page.component';
import { FileSizePipe } from 'src/app/pipes/file-size/file-size.pipe';
import { ShowSizeComponent } from './show-size/show-size.component';
import { StockCounterComponent } from './stock-counter/stock-counter.component';


@NgModule({
  declarations: [
    ToddPageComponent,
    FileSizePipe,
    ShowSizeComponent,
    StockCounterComponent,
  ],
  imports: [
    CommonModule,
    ToddPageRoutingModule
  ]
})
export class ToddPageModule { }
