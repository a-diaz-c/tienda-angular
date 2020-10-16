import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoModel } from 'src/app/models/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto: ProductoModel;
  @ViewChild('modal', {static: false}) modal: ElementRef;

  cantidad: number = 0;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  agregarProducto(){
    if(this.cantidad <= 0) return;

    let carrito = []; 
    this.producto['cantidad']= this.cantidad;
    let productosCarrito = localStorage.getItem('carrito');
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

}
