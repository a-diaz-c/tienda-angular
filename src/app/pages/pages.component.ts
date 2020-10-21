import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { element } from 'protractor';
import { LocationService } from '../services/location.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit, AfterViewInit {

  @ViewChild('lista', {static: false}) listaMenu: ElementRef;

  cantidadCarrito: number = 0;
  totalCarrito:number = 0;
  categorias: any [];

  lat;
  lng ;
  

  constructor(private productosService: ProductosService, 
              private locationService: LocationService,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.categorias = this.productosService.getCategorias();
    this.getLocation();
    this.cargarCarrito();
    this.actualizarCarrito();
  }

  ngAfterViewInit(){
    this.listarMenu();
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

  listarMenu(){
    let ul = this.renderer.createElement('ul');
    this.renderer.addClass(ul, 'list-group');
    this.renderer.appendChild(this.listaMenu.nativeElement, ul);

    this.categorias.forEach(element => {
      let li = this.renderer.createElement('li');
      this.renderer.setStyle(li, 'list-style', 'none');
      this.renderer.setStyle(li, 'padding-right', '0px');
      let button = this.renderer.createElement('button');
      this.renderer.addClass(button, 'btn');
      this.renderer.setAttribute(button, 'type','button');
      this.renderer.setAttribute(button, 'data-toggle', 'collapse');
      this.renderer.setAttribute(button, 'data-target', '#collapse' + element.id);
      this.renderer.appendChild(button, this.renderer.createText(element.nombre));

      this.renderer.appendChild(li, button);
      this.renderer.appendChild(ul, li);

      if(element.hijos.length > 0){
        let icon = this.renderer.createElement('li');
        this.renderer.addClass(icon, 'fas');
        this.renderer.addClass(icon, 'fa-angle-down');
        this.renderer.appendChild(button,icon);

        let div = this.renderer.createElement('div');
        this.renderer.addClass(div, 'collapse');
        this.renderer.setAttribute(div, 'id', 'collapse' + element.id);
        this.renderer.appendChild(li, div);

        let ul 

      }
    });
  }

}
