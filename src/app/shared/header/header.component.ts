import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { element } from 'protractor';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cantidadCarrito: number = 0;
  totalCarrito:number = 0;


  categorias;

   
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.categorias = this.productosService.getCategorias();
    this.cargarCarrito();
  }

  cargarCarrito(){
    let carrito = []
    if(localStorage.getItem('carrito')){
      carrito = JSON.parse(localStorage.getItem('carrito'));
      carrito.forEach( element => {
        this.cantidadCarrito += element.cantidad;
        this.totalCarrito += element.precio * element.cantidad;
      });
    }
  }

  

}
