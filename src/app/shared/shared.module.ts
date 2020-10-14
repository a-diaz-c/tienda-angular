import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from '../pages/pages.routes';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductoComponent } from './producto/producto.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';






@NgModule({
  declarations: [HeaderComponent, FooterComponent, ProductoComponent, LoginComponent],
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
    LoginComponent,
  ]
})
export class SharedModule { }
