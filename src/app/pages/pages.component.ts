import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
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

  lat;
  lng ;
  

  constructor(private productosService: ProductosService, private locationService: LocationService) { }

  ngOnInit() {
    this.categorias = this.productosService.getCategorias();
    this.getLocation();
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

   getLocation() {
    this.locationService.getPosition().then(pos => {
        this.lat = pos.lat;
        this.lng = pos.lng;
        console.log(this.lat  + " - " +  this.lng);
    });
  }

}
