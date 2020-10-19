import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';
import { AgmCoreModule } from '@agm/core';


import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component'

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { IdentificarseComponent } from './identificarse/identificarse.component';
import { PagoComponent } from './pago/pago.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { FamiliasComponent } from './familias/familias.component';




@NgModule({
  declarations: [PagesComponent, HomeComponent, DetalleProductoComponent, CarritoComponent, IdentificarseComponent, PagoComponent, SucursalesComponent, FamiliasComponent],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPoSTQRcYogMBiJCUtW_LJlNTyOT9_H2w'
    }),
  ],
})
export class PagesModule { }
