import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos: ProductoModel[] = [];
  constructor(private serviceProducto: ProductosService) {
   }

  ngOnInit() {
    this.productos = this.serviceProducto.getProductos();
  }

}
