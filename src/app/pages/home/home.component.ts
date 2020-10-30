import { Component, OnInit } from '@angular/core';
import { GlobalConfig } from 'src/app/config/config';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos: ProductoModel[] = [];
  globalconfig: GlobalConfig;

  constructor(private serviceProducto: ProductosService) {
    this.globalconfig = GlobalConfig.getInstance();
   }

  ngOnInit() {
    this.productos = this.serviceProducto.getProductos(this.globalconfig.getUsuario());
    console.log(this.productos);
  }

}
