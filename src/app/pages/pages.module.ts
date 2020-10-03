import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';



@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule,
  ]
})
export class PagesModule { }
