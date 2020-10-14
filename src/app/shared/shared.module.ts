import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from '../pages/pages.routes';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductoComponent } from './producto/producto.component';

import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [HeaderComponent, FooterComponent, ProductoComponent],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    RouterModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductoComponent,
  ]
})
export class SharedModule { }
