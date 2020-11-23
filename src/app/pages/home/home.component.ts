import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { element } from 'protractor';
import { GlobalConfig } from 'src/app/config/config';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('listaCarousel', {static: false}) listaCarousel: ElementRef;
  @ViewChild('imagesCarousel', {static: false}) imagesCarousel: ElementRef;

  carouselItems: [] = [];
  productos: ProductoModel[] = [];
  globalconfig: GlobalConfig;

  constructor(private serviceProducto: ProductosService, private renderer: Renderer2) {
    this.globalconfig = GlobalConfig.getInstance();
   }

  ngOnInit() {
    this.productos = this.serviceProducto.getProductos(this.globalconfig.getUsuario());
    let carousel = this.serviceProducto.getCarousel(this.globalconfig.getUsuario());
    this.carouselItems = carousel ? carousel.carousel : null;
    if(this.carouselItems == null) this.carouselItems = [];
    console.log(this.productos); 
    this.actualizarProductos();
  }

  actualizarProductos(){
    this.serviceProducto.getProductos$().subscribe( productos => {
      console.log(productos);
      this.productos = productos;
    } );
  }

  ngAfterViewInit(){
    this.carouselItems.forEach((element, index) => {
      let li = this.renderer.createElement('li');
      this.renderer.setAttribute(li,'data-target', '#carouselExampleIndicators');
      this.renderer.setAttribute(li, 'data-slide-to', index.toString());
      this.renderer.appendChild(this.listaCarousel.nativeElement, li);
      let div = this.renderer.createElement('div');
      this.renderer.addClass(div, 'carousel-item');
      this.renderer.appendChild(this.imagesCarousel.nativeElement, div);
      if(index == 0) {
        this.renderer.addClass(li, 'active');
        this.renderer.addClass(div, 'active');
      }
      let img = this.renderer.createElement('img');
      this.renderer.addClass(img, 'd-block');
      this.renderer.addClass(img, 'w-100');
      this.renderer.setAttribute(img, 'src', element);
      this.renderer.appendChild(div, img);
    });
  }

}
