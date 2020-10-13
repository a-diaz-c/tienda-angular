import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component'

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';




@NgModule({
  declarations: [PagesComponent, HomeComponent, DetalleProductoComponent],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
  ],
})
export class PagesModule { }
