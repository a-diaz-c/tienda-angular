import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  checkLlevar: Boolean = true;
  checkRecoger: Boolean = false;

  checkPaypal: boolean = true;
  checkTarjeta: boolean = false;
  checkEfectivo: boolean = false;

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

  email: String = "email@ejemplo.com";

  constructor() { }

  ngOnInit() {
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

}
