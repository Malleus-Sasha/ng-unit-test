import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToddPageComponent } from './todd-page.component';

const routes: Routes = [{ path: '', component: ToddPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToddPageRoutingModule { }
