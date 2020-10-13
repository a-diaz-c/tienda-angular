import { Component, Input, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/models/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto: ProductoModel;

  cantidad: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
