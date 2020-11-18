import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConfig } from 'src/app/config/config';
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
  @ViewChild('header', {static: false}) header: ElementRef;


  categorias = [];
  globalconfig: GlobalConfig;
  colorHader: string;
  colorMenu: string;
  icono: string;
   
  constructor(private productosService: ProductosService, 
              private route: Router,
              private renderer: Renderer2) { 
                this.globalconfig = GlobalConfig.getInstance();
}

  ngOnInit() {
    let usuario  = this.productosService.getCategorias(this.globalconfig.getUsuario());
    this.categorias = usuario.categorias;
    this.cargarCarrito();
    this.actualizarCarrito();
    this.colorHader = this.globalconfig.getcolorHeader();
    this.colorMenu = this.globalconfig.getColorMenu();
    this.icono = this.globalconfig.getIcono();
  }

  ngAfterViewInit(){
    this.listaMenu();
    this.addColorHeader();
    console.log(this.colorHader);
  }

  private addColorHeader(){
    if(this.globalconfig.getUsuario() == 'gruporoca')
      this.renderer.setStyle(this.header.nativeElement, 'background', `linear-gradient(-90deg, ${this.colorHader}, white)`);
    else{
      this.renderer.setStyle(this.header.nativeElement, 'background-color', this.colorHader);
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

  mover(familia: string){
    console.log('moviendo a ' +familia);
    this.route.navigate(['/productos/' + familia]);
  }

  listaMenu(){
    this.renderer.addClass(this.menuFamilias.nativeElement, "dropdown");
    this.categorias.forEach( element => {
      let button = this.renderer.createElement('button');
      this.renderer.addClass(button, "btn");
      this.renderer.setStyle(button, 'color', 'white');
      this.renderer.setAttribute(button, 'aria-expanded','false');
      this.renderer.setAttribute(button, 'aria-haspopup', 'false');
      this.renderer.setAttribute(button, 'data-toggle', 'dropdown');
      this.renderer.setAttribute(button, 'id', 'dropdownMenu1');
      this.renderer.appendChild(button, this.renderer.createText(element.nombre));
      

      let div = this.renderer.createElement('div');
      this.renderer.addClass(div,'dropdown');

      this.renderer.appendChild(this.menuFamilias.nativeElement, div);
      this.renderer.appendChild(div, button);
      
      if(element.hijos.length > 0){
        this.renderer.addClass(button,'dropdown-toggle');
        this.listarSubmenu(element.hijos, div);
      }else{
        this.renderer.listen(button, 'click', event => {
          this.mover(element.id);
        });
      }

      
    });
  }

  listarSubmenu(hijos: any[], padre: any){
    let ul = this.renderer.createElement('ul');
    this.renderer.addClass(ul, "dropdown-menu");
    this.renderer.addClass(ul, "multi-level");
    this.renderer.setAttribute(ul, 'role', 'menu');
    this.renderer.setAttribute(ul, 'aria-labelledby', 'dropdownMenu');
    hijos.forEach(element => {
      let li = this.renderer.createElement('li');
      let a = this.renderer.createElement('a');
      this.renderer.appendChild(a, this.renderer.createText(element.nombre));
      
      this.renderer.appendChild(li, a);
     
      this.renderer.appendChild(ul, li);

      if(element.hijos.length > 0){
        this.renderer.addClass(a, 'dropdown-item');
        this.renderer.addClass(li, 'dropdown-submenu');
        this.listarSubmenu(element.hijos, li);
      }else{
        this.renderer.addClass(li, 'dropdown-item');
        this.renderer.listen(a, 'click', event => {
          this.mover(element.id);
        });
      }

      this.renderer.appendChild(padre, ul);
    });

  }
}
