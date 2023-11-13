import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToddPageRoutingModule } from './todd-page-routing.module';
import { ToddPageComponent } from './todd-page.component';
import { FileSizePipe } from 'src/app/pipes/file-size/file-size.pipe';
import { ShowSizeComponent } from './show-size/show-size.component';


@NgModule({
  declarations: [
    ToddPageComponent,
    FileSizePipe,
    ShowSizeComponent,
  ],
  imports: [
    CommonModule,
    ToddPageRoutingModule
  ]
})
export class ToddPageModule { }
