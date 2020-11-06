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
      'carousel': true,
      'icono':
          'https://www.applebees.com/-/media/applebees/images/logos/logo.png?h=88&la=en&w=162&hash=167634130AC39DB0286D56EF0F8AEDF717BC3205',
    },
    {
      'id': 'TiendaMaines',
      'nombre': "Jule",
      'colorMenu': '#EBA40D',
      'colorHeader': '#722616',
      'carousel': true,
      'icono':
          'https://juleacapulco.com/wp-content/uploads/2016/09/logo_jule_blanco.png',
    },
    {
      'id': 'gruporoca',
      'nombre': "Grupo Roca",
      'colorMenu': '#1565C0',
      'colorHeader': '#2196F3',
      'carousel': true,
      'icono':
          'https://firebasestorage.googleapis.com/v0/b/database-app-1964b.appspot.com/o/Logo-Portada.png?alt=media&token=7b110546-88cc-42b5-8722-29f5b49a9b3d',
    },
    {
      'id': 'farmacia',
      'nombre': "Famacia",
      'colorMenu': '#0036FF',
      'colorHeader': '#FFFFFF',
      'carousel': true,
      'icono': 'https://firebasestorage.googleapis.com/v0/b/database-app-1964b.appspot.com/o/farmacia.png?alt=media&token=9b972909-ef61-4834-8090-97682c34dc34'
    },
    {
      'id': 'kingo',
      'nombre': "Kingo Systems",
      'colorMenu': '#1565C0',
      'colorHeader': '#2196F3',
      'carousel': false,
      'icono':
          'http://kingo.com.mx/wp-content/uploads/2019/06/LogotipoPaginaWeb.png',
    }
  ];

  constructor() { }


  getCliente(id: String): ConfigCliente{
    return this.clientes.find( element => element.id == id);
  }
}
