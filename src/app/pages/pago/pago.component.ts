import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  @ViewChild('formEnvio',{ static: false }) formEnvio: ElementRef;
  @ViewChild('formRecoger',{ static: false }) formRecoger: ElementRef;
  @ViewChild('formPaypal',{ static: false }) formPaypal: ElementRef;
  @ViewChild('formTarjeta',{ static: false }) formTarjeta: ElementRef;
  @ViewChild('formFactura',{ static: false }) formFactura: ElementRef;

  checkLlevar: Boolean = true;
  checkRecoger: Boolean = false;

  checkPaypal: boolean = true;
  checkTarjeta: boolean = false;
  checkEfectivo: boolean = false;

  checkFactura: boolean = false;

  envio = {
    'nombre': 'Hector',
    'apellidos': 'Nunez',
    'empresa': 'Kingo System',
    'sexo': 'H',
    'telefono': '7444849493',
    'calle': 'Av. Costera Miguel Aleman',
    'numExt': '1252',
    'numInt': '18',
    'referencia': 'En la torre de Acapulco',
    'colonia': 'Club Deportivo',
    'codigoPostal': '39690',
    'ciudad': 'Acapulco',
    'estado': 'Guerrero',
    'pais': 'México',
  };

  recoger = {
    'nombre': 'Hector',
    'apellidos': 'Nunez',
    'telefono': '7444849493',
  };

  factura = {
    'nombre': 'Kingo Systems SA de CV',
    'rfc': 'KYS010331243',
    'email': '',
    'usoDeCEDI': 'G03 - Gastos en general',
  };

  datosTarjeta = {
    'nombre': 'Hector',
    'numero': '5899 55224 4448 8881',
    'cp': '33453',
    'direccion': ' Gastos en general',
    'cvv': '123',
  };

  email: String = "email@ejemplo.com";
  carrito: any [] = []
  total: number = 0;
  formGroupEnvio: FormGroup;

  constructor(private prodctosService: ProductosService, private fb: FormBuilder) { 
    this.crearFormularioEnvio();
  }

  ngOnInit() {
    this.carrito = this.prodctosService.cargarCarrito();
    
    this.carrito.forEach((element: any) => {
      this.total += element.precio * element.cantidad;
     });
  }

  crearFormularioEnvio(){
    this.formGroupEnvio = this.fb.group({
      nombre: [''],
      apellido: [''],
      empresa: [''],
      telefono: [''],
      calle: [''],
      numExt: [''],
      numInt: [''],
      codigoPostal: [''],
      ciudad: [''],
      estado: [''],
      pais:[''],
    });
  }

  guardarEnvio(){
    console.log(this.formGroupEnvio);
    this.cerrarFormEnvio()
  }

  llevarChange(event){
    console.log(event);
    this.checkLlevar = event;
    this.checkRecoger = false;
  }

  recogerChange(event){
    this.checkRecoger = event;
    this.checkLlevar = false;
  }

  paypalChange(event){
    this.checkPaypal = event;
    this.checkTarjeta = false;
    this.checkEfectivo = false;
  }

  tarjetaChange(event){
    this.checkPaypal = false;
    this.checkTarjeta = event;
    this.checkEfectivo = false;
  }

  efectivoChange(event){
    this.checkPaypal = false;
    this.checkTarjeta = false;
    this.checkEfectivo = event;
  }

  mostrarFormEnvio(){
    this.formEnvio.nativeElement.style.display = 'block';
  }

  cerrarFormEnvio(){
    this.formEnvio.nativeElement.style.display = 'none';
  }

  mostrarFormRecoger(){
    this.formRecoger.nativeElement.style.display = 'block';
  }

  cerrarFormRecoger(){
    this.formRecoger.nativeElement.style.display = 'none';
  }

  mostrarFormPaypal(){
    this.formPaypal.nativeElement.style.display = 'block';
  }

  cerrarFormPaypal(){
    this.formPaypal.nativeElement.style.display = 'none';
  }

  mostrarFormTarjeta(){
    this.formTarjeta.nativeElement.style.display = 'block';
  }

  cerrarFormTajeta(){
    this.formTarjeta.nativeElement.style.display = 'none';
  }

  mostrarFormFactura(){
    this.formFactura.nativeElement.style.display = 'block';
  }

  cerrarFormFactura(){
    this.formFactura.nativeElement.style.display = 'none';
  }

}
