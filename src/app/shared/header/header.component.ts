import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categorias;
  passwordForm: string= "";
  emailForm: string = "";
  @ViewChild('modal', {static: false}) modal: ElementRef;
   
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.categorias = this.productosService.getCategorias();
  }

  mostrarModal(){
    console.log(this.modal);
    this.modal.nativeElement.style.display = 'block';
  }

  cerrarModal(){
    this.modal.nativeElement.style.display = 'none';
  }

  onLogin(form: NgForm){
    console.log(form);
    if(form.invalid){
      Object.values(form.controls).forEach( control => control.markAsTouched());
      return;
    }
    this.emailForm = form.controls.email.value;
    this.passwordForm = form.controls.password.value;

    this.modal.nativeElement.style.display = 'none';
  }

}
