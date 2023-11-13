import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DifferentPageComponent } from './different-page.component';

const routes: Routes = [{ path: '', component: DifferentPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DifferentPageRoutingModule { }
