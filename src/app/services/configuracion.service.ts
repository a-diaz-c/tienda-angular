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
      'colorMenu': '#333333',
      'colorHeader': '#FF640C',
      'carousel': true,
      'icono':
          'https://firebasestorage.googleapis.com/v0/b/database-app-1964b.appspot.com/o/Logo-Portada.png?alt=media&token=aa36d0f4-ee12-4b1d-8411-76e3c3e3d025',
    },
    {
      'id': 'farmacia',
      'nombre': "Famacia",
      'colorMenu': '#135188',
      'colorHeader': '#FFFFFF',
      'carousel': true,
      'icono': 'http://kingo.com.mx/wp-content/uploads/2020/11/Logotipo-Farmacia-Bahia-azul.png'
    },
    {
      'id': 'autopistadelsol',
      'nombre': "Materiales autopista del sol",
      'colorMenu': '#333333',
      'colorHeader': '#FF640C',
      'carousel': true,
      'icono':
          'http://kingo.com.mx/wp-content/uploads/2020/11/Logotipo-Farmacia-Bahia-azul.png',
    },
    {
      'id': 'materialestellez',
      'nombre': "Materiales Tellez de Acapulco",
      'colorMenu': '#333333',
      'colorHeader': '#FF640C',
      'carousel': true,
      'icono':
          'https://firebasestorage.googleapis.com/v0/b/database-app-1964b.appspot.com/o/materiales.jpg?alt=media&token=7db32105-24e7-4d28-8104-0eeeb5e7aac2',
    },
  ];

  constructor() { }


  getCliente(id: String): ConfigCliente{
    return this.clientes.find( element => element.id == id);
  }
}
