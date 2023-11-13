import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'todd-page', loadChildren: () => import('./pages/todd-page/todd-page.module').then(m => m.ToddPageModule) },
  { path: 'different-page', loadChildren: () => import('./pages/different-page/different-page.module').then(m => m.DifferentPageModule) },
  { path: 'welcome-page', loadChildren: () => import('./pages/welcome-page/welcome-page.module').then(m => m.WelcomePageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
