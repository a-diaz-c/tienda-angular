import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { info } from 'console';
import { GlobalConfig } from 'src/app/config/config';
import { ProductoModel } from 'src/app/models/producto.model';
import { ConfiguracionService } from 'src/app/services/configuracion.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('listaCarousel', {static: false}) listaCarousel: ElementRef;
  @ViewChild('imagesCarousel', {static: false}) imagesCarousel: ElementRef;

  carouselItems: string [] = [];
  productos: ProductoModel[] = [];
  

  constructor(private serviceProducto: ProductosService, 
              private renderer: Renderer2, 
              private serviceConfi: ConfiguracionService, 
              public globalconfig: GlobalConfig) {
   }

   ngOnInit() {
     
     this.cargarItemsCarousel();
    console.log(this.productos); 
    console.log(this.serviceConfi.datosInciar);
  }

  actualizarProductos(){
     this.serviceProducto.getProductos$().subscribe( productos => {
      console.log(productos);
      this.productos = productos;
    } );
  }

  cargarItemsCarousel(){
    
    this.serviceConfi.getDatos$().subscribe( datos =>{
      this.carouselItems = this.serviceConfi.datosInciar.banner;
      this.productos = this.serviceConfi.datosInciar.productos;
      this.cargarCarousel();
      console.log(this.productos);
    });
  }

  cargarCarousel(){ 
    console.log('cargando carousel');
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

  

  ngAfterViewInit(){
    setTimeout(() => {
      this.serviceConfi.loadData(); 
    });
    /* this.carouselItems.forEach((element, index) => {
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
    }); */
  }

}
