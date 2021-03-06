import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConfig } from 'src/app/config/config';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit, OnDestroy  {

  producto: ProductoModel = new ProductoModel();
  cantidad: number = 1;
  image: string;
  imagenes: string [] = [];
  video: boolean = false;
  @ViewChild('modal', {static: false}) modal: ElementRef;
  @ViewChild('imagesCarousel', {static: false}) imagesCarousel: ElementRef;
  divCarousle;

  constructor(private route: ActivatedRoute, 
              private productosService: ProductosService, 
              private routes: Router,
              private renderer: Renderer2,
              public globalconfig: GlobalConfig,
              private metaService:Meta,
              private titleService: Title) { 
    this.producto.nombre = "";
    this.producto.descripcion = "";
    this.producto.imagen = [];
    this.producto.precio = 0;
    this.producto.video = [];
  }
  

  ngOnInit() {
    
  }

  async cargarProducto(){
    let producto: any = await this.productosService.getProductoLocalStorage();
    if(producto != null){
      producto = JSON.parse(producto);
      console.log(producto);

      this.producto.nombre = producto.nombre;
      this.producto.descripcion = producto.descripcion;
      this.producto.imagen = producto.imagen;
      this.producto.precio = producto.precio;
      this.producto.video = producto.video;
      this.metaService.addTags( [{name:'title', content: this.producto.nombre},{ name:'description',content:"Article Description"}]);
      this.carouselProducto();
    }
  }

  ngAfterViewInit(){
    this.cargarProducto();
    this.titleService.setTitle(this.producto.nombre);
  }

  ngOnDestroy(): void {
    this.titleService.setTitle("Tienda Kingo");
    this.metaService.removeTag("name='title'");
    this.metaService.removeTag("name='description'");
  }

  private carouselProducto(){
    this.divCarousle = this.renderer.createElement('div');
    this.renderer.appendChild(this.imagesCarousel.nativeElement, this.divCarousle);
    if(this.imagenes.length == 0){
      let div = this.renderer.createElement('div');
      this.renderer.addClass(div, 'carousel-item');
      this.renderer.appendChild(this.divCarousle, div);
      this.renderer.addClass(div, 'active');
      let img = this.renderer.createElement('img');
      this.renderer.addClass(img, 'm-2');
      this.renderer.addClass(img, 'card-img-top');
      this.renderer.setAttribute(img, 'src', this.producto.imagen[0]);
      this.renderer.appendChild(div, img);
    }
    this.imagenes.forEach((element, index) => {
      let div = this.renderer.createElement('div');
      this.renderer.addClass(div, 'carousel-item');
      this.renderer.appendChild(this.divCarousle, div);
      if(index == 0) {
        this.renderer.addClass(div, 'active');
      }
      let img = this.renderer.createElement('img');
      this.renderer.addClass(img, 'm-2');
      this.renderer.addClass(img, 'card-img-top');
      this.renderer.setAttribute(img, 'src', element);
      this.renderer.appendChild(div, img);
    });
    let div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'carousel-item');
    this.renderer.appendChild(this.divCarousle, div);
    let divVideo = this.renderer.createElement('div');
    this.renderer.addClass(divVideo, 'embed-responsive');
    this.renderer.addClass(divVideo, 'embed-responsive-16by9');
    this.renderer.appendChild(div, divVideo);
    let video = this.renderer.createElement('video');
    this.renderer.addClass(video,'embed-responsive-item');
    this.renderer.setAttribute(video, 'controls', 'true');
    this.renderer.setProperty(video, 'muted', 'true');
    this.renderer.appendChild(divVideo, video);
    let source = this.renderer.createElement('source');
    this.renderer.setAttribute(source, 'src', 'https://firebasestorage.googleapis.com/v0/b/database-app-1964b.appspot.com/o/Introducing%20Google%20Analytics%20for%20Firebase.mp4?alt=media&token=9df9a3a1-541a-4d39-8637-3198c18c879b');
    this.renderer.setAttribute(source, 'type', 'video/mp4');
    this.renderer.appendChild(video, source);
    
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
    console.log(color);
    this.imagenes = color;
    this.image = color[0];
    this.renderer.removeChild(this.imagesCarousel.nativeElement, this.divCarousle)
    this.carouselProducto();
  }

  cambiarImagen(color: string ){
    this.video = false;
    this.image = color;
  }
  

}
