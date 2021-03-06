import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConfig } from 'src/app/config/config';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto: ProductoModel;
  @Input() ruta: string;
  @ViewChild('modal', {static: false}) modal: ElementRef;

  cantidad: number = 1;

  constructor(private route: Router, private productoService: ProductosService, public globalconfig: GlobalConfig) { }

  ngOnInit() {
    console.log(this.producto);
    if(this.producto.nombre.length > 40){
      this.producto.nombre = this.producto.nombre.substring(0, 40) + "...";
      
    }
  }

  agregarProducto(){
    if(this.cantidad <= 0) return;

    this.producto['cantidad']= this.cantidad;
    /*let productosCarrito = localStorage.getItem('carrito');
    if(productosCarrito){
      carrito =  JSON.parse(productosCarrito);
      let producto = carrito.find(element => element.claveProducto === this.producto.claveProducto);
      if(producto){
        producto.cantidad = producto.cantidad + this.cantidad;
      }else{
        carrito.push(this.producto);
      }
    }else{
      carrito.push(this.producto);
    }
    this.cantidad = 0;
    localStorage.setItem('carrito',JSON.stringify(carrito));
    this.mostrarModal(); */

    this.productoService.agregarProductoCarrito(this.producto);
    this.mostrarModal();
  }

  mostrarModal(){
    this.modal.nativeElement.style.display = 'block';
  }

  cerrarModal(){
    this.modal.nativeElement.style.display = 'none';
  }

  moverAlCarrito(){
    this.route.navigate(['/carrito']);
  }

  cambiarRuta(){
    this.productoService.setProductLocalStorage(this.producto);
    this.route.navigate([this.ruta, this.producto.nombre]);
  }

}
