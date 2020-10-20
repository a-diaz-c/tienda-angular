import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit  {

  cantidadCarrito: number = 0;
  totalCarrito:number = 0;

  @ViewChild('menu',  {static: false}) menuFamilias: ElementRef;


  categorias = [];

   
  constructor(private productosService: ProductosService, 
              private route: Router,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.categorias = this.productosService.getCategorias();
    console.log(this.categorias);
    this.cargarCarrito();
    this.actualizarCarrito();
    
  }

  ngAfterViewInit(){
    this.listaMenu();
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

  mover(familia: string){
    this.route.navigate(['/familias/' + familia]);
  }

  listaMenu(){
    this.renderer.addClass(this.menuFamilias.nativeElement, "dropdown");
    this.categorias.forEach( element => {
      let button = this.renderer.createElement('button');
      this.renderer.addClass(button, "btn");
      if(element.hijos.length > 0) 
        this.renderer.addClass(button,'dropdown-toggle');
      this.renderer.setStyle(button, 'color', 'white');
      
      this.renderer.appendChild(button, this.renderer.createText(element.nombre));
      this.renderer.appendChild(this.menuFamilias.nativeElement, button);
    });
  }

  

}
