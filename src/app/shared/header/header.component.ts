import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categorias;

  constructor(private productosService: ProductosService) { }

  ngOnInit() {

    this.categorias = this.productosService.getCategorias();
    console.log(this.categorias);
  }

}
