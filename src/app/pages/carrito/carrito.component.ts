import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  itemsCarrito: any [];
  

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.cargarCarrito();
    this.actualizarCarrito();
  }

  private cargarCarrito(){
    this.itemsCarrito = this.productosService.cargarCarrito();
    console.log(this.itemsCarrito);
  }

   removeItem(producto: string){
    this.productosService.removerProducto(producto);
  }

  actualizarCarrito(){
    this.productosService.getCarrito$().subscribe( carrito => {
      this.itemsCarrito = carrito;
    });
  }

}
