import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  itemsCarrito: any [];
  total: number = 0;
  productosTotal: number = 0;

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.cargarCarrito();
    this.actualizarCarrito();
    this.itemsCarrito.forEach( element => {
      this.total += element.precio * element.cantidad;
      this.productosTotal += element.cantidad; 
    });
  }

  private cargarCarrito(){
    this.itemsCarrito = this.productosService.cargarCarrito();
    console.log(this.itemsCarrito);
  }

   removeItem(producto: string){
    this.productosService.removerProducto(producto);
  }

  modificarCarito(producto: string, cantidad: string){
    console.log('modificar carrito');
    console.log(cantidad);
    this.productosService.modificarCarrito(producto, parseInt(cantidad));
  }

  actualizarCarrito(){
    this.productosService.getCarrito$().subscribe( carrito => {
      this.total = 0;
      this.productosTotal = 0;
      this.itemsCarrito = carrito;
      this.itemsCarrito.forEach( element => {
        this.total += element.precio * element.cantidad;
        this.productosTotal += element.cantidad; 
      });
    });
  }

}
