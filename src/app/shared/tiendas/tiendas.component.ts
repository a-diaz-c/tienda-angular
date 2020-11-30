import { Component, OnInit } from '@angular/core';
import { GlobalConfig } from 'src/app/config/config';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {
  
  sucursaleItem: [];
  constructor(private serviceProducto: ProductosService, public globalconfig: GlobalConfig) { 
  }

  ngOnInit() {
    let sucursale = this.serviceProducto.getSucursales(this.globalconfig.getUsuario());
    this.sucursaleItem = sucursale ? sucursale.sucursales : null;
    
    if(this.sucursaleItem == null) this.sucursaleItem = [];
  }

}
