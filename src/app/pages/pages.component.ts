import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  categorias;

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.categorias = this.productosService.getCategorias();
  }

}
