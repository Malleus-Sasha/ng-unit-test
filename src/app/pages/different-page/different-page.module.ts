import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DifferentPageRoutingModule } from './different-page-routing.module';
import { DifferentPageComponent } from './different-page.component';


@NgModule({
  declarations: [
    DifferentPageComponent
  ],
  imports: [
    CommonModule,
    DifferentPageRoutingModule
  ]
})
export class DifferentPageModule { }
