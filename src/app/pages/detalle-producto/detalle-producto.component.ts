import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto: ProductoModel;
  cantidad: number = 0;

  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit() {
    this.producto = this.productosService.buscarProducto(this.route.snapshot.paramMap.get('idProducto'));
    console.log(this.producto);
  }

}
