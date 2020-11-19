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
      'sucursales': true,
      'icono':
          'https://www.applebees.com/-/media/applebees/images/logos/logo.png?h=88&la=en&w=162&hash=167634130AC39DB0286D56EF0F8AEDF717BC3205',
    },
    {
      'id': 'TiendaMaines',
      'nombre': "Jule",
      'colorMenu': '#EBA40D',
      'colorHeader': '#722616',
      'carousel': true,
      'sucursales': false,
      'icono':
          'https://juleacapulco.com/wp-content/uploads/2016/09/logo_jule_blanco.png',
    },
    {
      'id': 'gruporoca',
      'nombre': "Grupo Roca",
      'colorMenu': '#333333',
      'colorHeader': '#FF640C',
      'carousel': true,
      'sucursales': true,
      'icono':
          'https://firebasestorage.googleapis.com/v0/b/database-app-1964b.appspot.com/o/Logo-Portada.png?alt=media&token=aa36d0f4-ee12-4b1d-8411-76e3c3e3d025',
    },
    {
      'id': 'farmacia',
      'nombre': "Famacia",
      'colorMenu': '#135188',
      'colorHeader': '#FFFFFF',
      'carousel': true,
      'sucursales': false,
      'icono': 'http://kingo.com.mx/wp-content/uploads/2020/11/Logotipo-Farmacia-Bahia-azul.png'
    },
    {
      'id': 'tienda',
      'nombre': "Kingo Systems",
      'colorMenu': '#1565C0',
      'colorHeader': '#1565C0',
      'carousel': false,
      'sucursales': false,
      'icono':
          'https://firebasestorage.googleapis.com/v0/b/database-app-1964b.appspot.com/o/Logo%20Kingo.png?alt=media&token=81592a50-93a6-4f0f-aef7-84a130cf6735',
    },
    {
      'id': 'autopistadelsol',
      'nombre': "Materiales autopista del sol",
      'colorMenu': '#333333',
      'colorHeader': '#FFFFFF',
      'carousel': true,
      'sucursales': false,
      'icono':
          'https://firebasestorage.googleapis.com/v0/b/database-app-1964b.appspot.com/o/logo.png?alt=media&token=21402a6f-e87a-4b5a-b450-0af322452346',
    },
    {
      'id': 'materialestellez',
      'nombre': "Materiales Tellez de Acapulco",
      'colorMenu': '#033E73',
      'colorHeader': '#FFFFFF',
      'carousel': true,
      'sucursales': false,
      'icono':
          'https://firebasestorage.googleapis.com/v0/b/database-app-1964b.appspot.com/o/materiales.jpg?alt=media&token=7db32105-24e7-4d28-8104-0eeeb5e7aac2',
    },
    {
      'id': 'zapateria',
      'nombre': "Zapateria Acapulco",
      'colorMenu': '#033E73',
      'colorHeader': '#FFFFFF',
      'carousel': false,
      'sucursales': false,
      'icono':
          'https://firebasestorage.googleapis.com/v0/b/database-app-1964b.appspot.com/o/zapateria.jpg?alt=media&token=dfd127c5-ef95-4efc-87bb-fd3719089234',
    },
    {
      'id': 'pollo',
      'nombre': "Pollo Caliente",
      'colorMenu': '#E30E07',
      'colorHeader': '#F1E936',
      'carousel': false,
      'sucursales': false,
      'icono':
          'https://ii.ct-stc.com/2/logos/empresas/2019/08/26/ea155f2615fc45c29c06212600949thumbnail.png',
    },
    {
      'id': 'tarascos',
      'nombre': "Los Tarascos",
      'colorMenu': '#f90',
      'colorHeader': '#0461dd',
      'carousel': false,
      'sucursales': false,
      'icono':
          'https://lostarascos.com.mx/wp-content/themes/tarascos/dist/images/logo-white.png',
    },
    
  ];

  constructor() { }


  getCliente(id: String): ConfigCliente{
    return this.clientes.find( element => element.id == id);
  }
}
