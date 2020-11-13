import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto: ProductoModel;
  cantidad: number = 1;
  image: string;
  @ViewChild('modal', {static: false}) modal: ElementRef;

  constructor(private route: ActivatedRoute, private productosService: ProductosService, private routes: Router) { }

  ngOnInit() {
    this.producto = this.productosService.buscarProducto(this.route.snapshot.paramMap.get('idProducto'));
    this.image = this.producto.imagen;
    console.log(this.producto);
  }

  agregarAlCarrito(){
    if(this.cantidad <= 0) return;

    console.log(this.producto);


    this.producto['cantidad']= this.cantidad;
    this.productosService.agregarProductoCarrito(this.producto);
    this.mostrarModal();
  }

  mostrarModal(){
    this.modal.nativeElement.style.display = 'block';
  }

  cerrarModal(){
    this.modal.nativeElement.style.display = 'none';
  }

  moverAlCarrito(){
    this.routes.navigate(['/carrito']);
  }

  cambiarImagen(color: string){
    this.image = color;
  }

}
