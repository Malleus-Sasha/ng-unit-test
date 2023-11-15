import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MenuComponent } from './layouts/menu/menu.component';
// import { CreditCardDirective } from './directives/credit-card/credit-card.directive';
// import { FileSizePipe } from './pipes/file-size/file-size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SpinnerComponent,
    MenuComponent,
    // CreditCardDirective,
    // FileSizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
