import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from '../pages/pages.routes';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductoComponent } from './producto/producto.component';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, ProductoComponent],
  imports: [
    CommonModule,
    PAGES_ROUTES,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductoComponent,
  ]
})
export class SharedModule { }
