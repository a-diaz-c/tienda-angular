import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  imagenes: string [] = [];
  @ViewChild('modal', {static: false}) modal: ElementRef;
  @ViewChild('imagesCarousel', {static: false}) imagesCarousel: ElementRef;

  constructor(private route: ActivatedRoute, 
              private productosService: ProductosService, 
              private routes: Router,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.producto = this.productosService.buscarProducto(this.route.snapshot.paramMap.get('idProducto'));
    this.image = this.producto.imagen;
    if(this.producto.otros){
      if(this.producto.otros.color){
        this.imagenes = this.producto.otros.color[0].image;
      }
    }
    console.log(this.producto);
  }

  ngAfterViewInit(){
    if(this.imagenes.length == 0){
      let div = this.renderer.createElement('div');
      this.renderer.addClass(div, 'carousel-item');
      this.renderer.appendChild(this.imagesCarousel.nativeElement, div);
      this.renderer.addClass(div, 'active');
      let img = this.renderer.createElement('img');
      this.renderer.addClass(img, 'm-2');
      this.renderer.addClass(img, 'card-img-top');
      this.renderer.setAttribute(img, 'src', this.image);
      this.renderer.appendChild(div, img);
    }
    this.imagenes.forEach((element, index) => {
      let div = this.renderer.createElement('div');
      this.renderer.addClass(div, 'carousel-item');
      this.renderer.appendChild(this.imagesCarousel.nativeElement, div);
      if(index == 0) {
        this.renderer.addClass(div, 'active');
      }
      let img = this.renderer.createElement('img');
      this.renderer.addClass(img, 'm-2');
      this.renderer.addClass(img, 'card-img-top');
      this.renderer.setAttribute(img, 'src', element);
      this.renderer.appendChild(div, img);
    });
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

  cambiarColor(color: string []){
    this.imagenes = color;
    this.image = color[0];
  }

  cambiarImagen(color: string ){
    this.image = color;
  }

  

}
