import { Injectable } from '@angular/core';
import { ConfigCliente } from '../models/clienteConfig';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  clientes = [
    {
      'id': 'applebees',
      'nombre': "Apple Bee's",
      'colorMenu': '#d11507',
      'colorHeader': '#292b2c',
      'icono':
          'https://www.applebees.com/-/media/applebees/images/logos/logo.png?h=88&la=en&w=162&hash=167634130AC39DB0286D56EF0F8AEDF717BC3205',
    },
    {
      'id': 'TiendaMaines',
      'nombre': "Jule",
      'colorMenu': '#EBA40D',
      'colorHeader': '#722616',
      'icono':
          'https://juleacapulco.com/wp-content/uploads/2016/09/logo_jule_blanco.png',
    },
    {
      'id': 'gruporoca',
      'nombre': "Grupo Roca",
      'colorMenu': '#1565C0',
      'colorHeader': '#2196F3',
      'icono':
          'http://gruporocasa.com/wp-content/uploads/2018/05/Logo-Pagina-Web.jpg',
    },
    {
      'id': 'farmacia',
      'nombre': "Famacia",
      'colorMenu': '#0036FF',
      'colorHeader': '#D90505',
      'icono':
          'https://sucursales.fahorro.com/img/upload/logo-fa.png',
    }
  ];

  constructor() { }


  getCliente(id: String): ConfigCliente{
    return this.clientes.find( element => element.id ==  id);
  }
}
