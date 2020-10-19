import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  cantidadCarrito: number = 0;
  totalCarrito:number = 0;
  categorias;

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.categorias = this.productosService.getCategorias();
    this.cargarCarrito();
    this.actualizarCarrito();
  }

  cargarCarrito(){
    let carrito = this.productosService.cargarCarrito();
    carrito.forEach(element => {
     this.cantidadCarrito += element.cantidad;
     this.totalCarrito += element.precio * element.cantidad;
    });
   }
 
   actualizarCarrito(){
     this.productosService.getCarrito$().subscribe( carrito => {
      this.cantidadCarrito = 0;
      this.totalCarrito = 0;
      carrito.forEach( element => {
       this.cantidadCarrito += element.cantidad;
       this.totalCarrito += element.precio * element.cantidad;
     });
       console.log(carrito);
     });
   }

}
