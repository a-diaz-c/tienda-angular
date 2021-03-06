import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { GlobalConfig } from '../config/config';
import { ConfiguracionService } from '../services/configuracion.service';
import { LocationService } from '../services/location.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit, AfterViewInit {

  @ViewChild('lista', {static: false}) listaMenu: ElementRef;
  @ViewChild('drawer', {static: false}) drawer: MatSidenav;
  @ViewChild('header', {static: false}) header: ElementRef;

  cantidadCarrito: number = 0;
  totalCarrito:number = 0;
  categorias: any [];
  

  lat;
  lng ;

  colorHader: string;
  colorMenu: string;
  icono: string;
  

  constructor(private productosService: ProductosService, 
              private locationService: LocationService,
              private renderer: Renderer2,
              private route: Router,
              public globalconfig: GlobalConfig,
              private serviceConfi: ConfiguracionService) { 
                
  }

  ngOnInit() {
    this.categorias = this.productosService.getCategorias(this.globalconfig.getUsuario()).categorias;
    this.getLocation();
    this.cargarCarrito();
    this.actualizarCarrito();
    this.colorHader = this.globalconfig.getcolorHeader();
    this.colorMenu = this.globalconfig.getColorMenu();
    this.icono = this.globalconfig.getIcono();
    this.serviceConfi.iniciar();

    this.route.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      
      window.scrollTo(0, 0)
    });
  }

  ngAfterViewInit(){
    this.listarMenu(this.categorias,this.listaMenu.nativeElement, true);
    this.addColorHeader();
  }

  private addColorHeader(){
    if(this.globalconfig.getUsuario() == 'gruporoca')
      this.renderer.setStyle(this.header.nativeElement, 'background', `linear-gradient(90deg, ${this.colorHader}, white)`);
    else{
      this.renderer.setStyle(this.header.nativeElement, 'background', this.colorHader);
    }
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
     });
   }

   getLocation() {
    this.locationService.getPosition().then(pos => {
        this.lat = pos.lat;
        this.lng = pos.lng;
        console.log(this.lat  + " - " +  this.lng);
    });
  }

  listarMenu(array: any [], padre, root: boolean){
    let ul = this.renderer.createElement('ul');
    this.renderer.addClass(ul,'list-group');
    this.renderer.setStyle(ul, 'width', '100%');
    this.renderer.appendChild(padre, ul);

    array.forEach((element: any) => {
      let li = this.renderer.createElement('li');
      this.renderer.setStyle(li, 'list-style', 'none');
      this.renderer.setStyle(li, 'padding-right', '0px');
      if(root) this.renderer.addClass(li, 'root');
      let button = this.renderer.createElement('button');
      this.renderer.addClass(button, 'btn');
      this.renderer.addClass(button, 'd-flex');
      this.renderer.addClass(button, 'justify-content-start');
      this.renderer.setStyle(button, 'width', '100%');
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
        this.renderer.addClass(icon, 'ml-1');
        this.renderer.appendChild(button,icon);

        let div = this.renderer.createElement('div');
        this.renderer.addClass(div, 'collapse');
        this.renderer.setAttribute(div, 'id', 'collapse' + element.id);
        this.renderer.appendChild(li, div);

        this.listarMenu(element.hijos, div, false);
      }else{
        this.renderer.listen(button, 'click', event => {
          this.mover(element.id);
        });
      }
    });
  }

  mover(familia: string){
    this.route.navigate(['/productos/' + familia]);
    this.drawer.opened = false;
/*     this.renderer.setProperty(this.drawer.nativeElement,'opened','false');
 */  }

 buscarProducto(nombre: string){
  this.productosService.buscarProductoPorNombre(nombre);
}

}
