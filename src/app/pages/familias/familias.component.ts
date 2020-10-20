import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-familias',
  templateUrl: './familias.component.html',
  styleUrls: ['./familias.component.css']
})
export class FamiliasComponent implements OnInit {

  productos: ProductoModel[] = [];
  familia: string;

  constructor(private productosService: ProductosService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  async ngOnInit() {
    this.productos = this.productosService.buscarProductosPorFamilia(this.activatedRoute.snapshot.paramMap.get('familia'));
  }

}
