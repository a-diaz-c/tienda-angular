import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Observable, Subject } from 'rxjs';
import { ProductoModel } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  categorias = [
    {'id': '30', 'nombre': 'Hambuergesas', 'hijos': [
      {'id': '3010', 'nombre': 'Pollo', 'hijos': [
        {'id': '301010', 'nombre': 'Doble', 'hijos': []},
        {'id': '302010', 'nombre': 'Sensilla', 'hijos': []},
      ]},
      {'id': '3010', 'nombre': 'Res', 'hijos': []},
    ]},
    {'id': '40', 'nombre': 'Costillas', 'hijos': []},
    {'id': '70', 'nombre': 'Cortes de carne', 'hijos': []},
    {'id': '90', 'nombre': 'Ensaladas', 'hijos': []},
    {'id': '80', 'nombre': 'Bebidas', 'hijos': [
      {'id': '8010', 'nombre': 'Con alchol', 'hijos': []},
      {'id': '8020', 'nombre': 'Sin alchol', 'hijos': []},
    ]},
    
    
  ];

  productos = [
    {
      'clave_producto': '100',
      'nombre': "Texan Burger",
      'precio': '90.00',
      'familia_prod': '30',
      'imagen':
          'https://menu.applebees.com.mx/wp-content/uploads/2020/06/Texan-burger-e1592004708758.jpg',
      'marca': '',
      'descripcion':
          'Hamburguesa con trocitos de brisket de res BBQ, cebolla, chile jalapeño fresco, queso Cheddar blanco y nuestra salsa especial de la casa.',
      'usuario':'applebees',
    },
    {
      'clave_producto': '102',
      'nombre': "Cowboy Burger",
      'precio': '105.00',
      'familia_prod': '30',
      'imagen':
          'https://menu.applebees.com.mx/wp-content/uploads/2020/06/Cowboy-Burger.jpg',
      'marca': '',
      'descripcion':
          'Hamburguesa cubierta con crujientes tiras de cebolla, queso Cheddar blanco, tocino ahumado, lechuga, tomate, cebolla, pepinillos y salsa BBQ.',
      'usuario':'applebees',
    },
    {
      'clave_producto': '103',
      'nombre': "Avocado Burger",
      'precio': '100.00',
      'familia_prod': '30',
      'imagen':
          'https://menu.applebees.com.mx/wp-content/uploads/2020/06/Avocado-Burger.jpg',
      'marca': '',
      'usuario':'applebees',
      'descripcion':
          'Hamburguesa cubierta con queso suizo, tocino y aguacate. Servida con mayonesa de tomates secos.'
    },
    {
      'clave_producto': '104',
      'nombre': "Applebee's Riblets",
      'precio': '160.00',
      'familia_prod': '40',
      'imagen':
          'https://menu.applebees.com.mx/wp-content/uploads/2020/06/Riblets-Smaller-Portion.jpg',
      'marca': '',
      'usuario':'applebees',
      'descripcion':
          'Costillas de cerdo ahumadas y bañadas con la salsa de tu elección. Se sirven con papas fritas y elote. Porción Regular y Riblets Basket (Half size)'
    },
    {
      'clave_producto': '105',
      'nombre': "Double-Glazed Ribs",
      'precio': '300.0',
      'familia_prod': '302010',
      'imagen':
          'https://menu.applebees.com.mx/wp-content/uploads/2020/06/Double-glazed-Ribs.jpg',
      'marca': '',
      'usuario':'applebees',
      'descripcion':
          'Costillar de cerdo asado a la parrilla, bañado con salsa de tu elección. Se sirven con papas fritas y elote. Porción Regular y Medio Costillar'
    },
    {
      'clave_producto': '106',
      'nombre': "Shrimp'N Parmesan Steak",
      'precio': '155.00',
      'familia_prod': '70',
      'imagen':
          'https://menu.applebees.com.mx/wp-content/uploads/2020/06/Shrimp-Parmesan-Steak-New-Photo.jpg',
      'marca': '',
      'usuario':'applebees',
      'descripcion':
          'Tierno corte acompañado de suculentos camarones y quesos italianos. Se sirve con selección de 2 guarniciones.'
    },
    {
      'clave_producto': '107',
      'nombre': "House Steak",
      'precio': '261.95',
      'familia_prod': '70',
      'imagen':
          'https://menu.applebees.com.mx/wp-content/uploads/2020/06/House-Steak.jpg',
      'marca': '',
      'usuario':'applebees',
      'descripcion': ''
    },
    {
      'clave_producto': '108',
      'nombre': "Bourbon Street Steak",
      'precio': '88.00',
      'familia_prod': '70',
      'imagen':
          'https://menu.applebees.com.mx/wp-content/uploads/2020/06/Bourbon-Street-Steak.jpg',
      'marca': '',
      'usuario':'applebees',
      'descripcion': ''
    },
    {
      'clave_producto': '109',
      'nombre': 'Buffalo Salad',
      'precio': '80.00',
      'familia_prod': '90',
      'imagen':
          'https://menu.applebees.com.mx/wp-content/uploads/2020/06/Buffalo-Salad.jpg',
      'marca': '',
      'usuario':'applebees',
      'descripcion': ''
    },
    {
      'clave_producto': '110',
      'nombre': "Oriental Chicken Salad",
      'precio': '120.00',
      'familia_prod': '90',
      'imagen':
          'https://menu.applebees.com.mx/wp-content/uploads/2020/06/Oriental-Chicken-Salad.jpg',
      'marca': '',
      'usuario':'applebees',
      'descripcion': ''
    },
    {
      'clave_producto': '111',
      'nombre': "BREWTUS",
      'precio': '67.00',
      'familia_prod': '8010',
      'imagen':
          'https://applebees.com.mx/wp-content/uploads/2020/05/BudLight_Brewtusv1a_HR.jpg',
      'marca': '',
      'usuario':'applebees',
      'descripcion': ''
    },
    {
      'clave_producto': '112',
      'nombre': "Perfect Cosmo",
      'precio': '79.00',
      'familia_prod': '8010',
      'imagen':
          'https://applebees.com.mx/wp-content/uploads/2020/05/PerfectCosmo.jpg',
      'marca': '',
      'usuario':'applebees',
      'descripcion': ''
    },
    {
      'clave_producto': '113',
      'nombre': "Perfect Margarita",
      'precio': '58.00',
      'familia_prod': '8010',
      'imagen':
          'https://applebees.com.mx/wp-content/uploads/2020/05/PerfectMargarita.jpg',
      'marca': '',
      'usuario':'applebees',
      'descripcion': ''
    },
    {
      'clave_producto': '1000',
      'nombre': "DEWALT Lijadora Roto-Orbital 5 pulgadas",
      'precio': '1419.00',
      'familia_prod': '302020',
      'imagen':
          'https://images-na.ssl-images-amazon.com/images/I/71RznGesePL._AC_SL1399_.jpg',
      'marca': 'Wal front',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1020',
      'nombre':
          "Bestgle Propósito de Mufti Eje flexible para herramienta rotativa Taladro flexible Troqueladora Extensión del eje eléctrico Herramienta rotativa Accesorio Accesorio Accesorio de llave Chuck 3.175mm",
      'precio': '430',
      'familia_prod': '302020',
      'imagen':
          'https://images-na.ssl-images-amazon.com/images/I/51KszPCXBQL._AC_SL1000_.jpg',
      'marca': 'Sonoff',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1030',
      'nombre': "Black + Decker BDCMTJS - Accesorio para sierra de calar",
      'precio': '430.00',
      'familia_prod': '302020',
      'imagen':
          'https://images-na.ssl-images-amazon.com/images/I/7126oDJhzZL._AC_SL1500_.jpg',
      'marca': 'Black & Decker',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1040',
      'nombre': "Hidrolavadora Eléctrica, 1800 Psi, Pretul Hila-1800P",
      'precio': '1735.00',
      'familia_prod': '302020',
      'imagen':
          'https://images-na.ssl-images-amazon.com/images/I/71bk35sq65L._AC_SL1500_.jpg',
      'marca': 'Koblenz',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1050',
      'nombre': "Set de pruebas eléctricas Klein Tools 69149",
      'precio': '1097.00',
      'familia_prod': '302010',
      'imagen':
          'https://images-na.ssl-images-amazon.com/images/I/61Is%2Bb3s-PL._AC_SL1000_.jpg',
      'marca': 'Klein Tools',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1060',
      'nombre': "Sonoff Basic Interruptor Inteligente WiFi",
      'precio': '2717.00',
      'familia_prod': '302010',
      'imagen':
          'https://images-na.ssl-images-amazon.com/images/I/51WSJq7fSoL._AC_SL1000_.jpg',
      'marca': 'Sonoff',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1070',
      'nombre':
          "Pyle PCO850 Acondicionador Eléctrico de 15 A, con Regleta para Montaje en Rack y Protector de Picos con 9 Tomacorrientes",
      'precio': '261.95',
      'familia_prod': '302010',
      'imagen':
          'https://images-na.ssl-images-amazon.com/images/I/51E%2BuIQJfzL._AC_SL1000_.jpg',
      'marca': 'Pyle',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1080',
      'nombre':
          "Koblenz NBKKBZ330 No-Break 5216 USB/R - 520 Va, 240 W, Negro, para Oficina",
      'precio': '967.00',
      'familia_prod': '302020',
      'imagen':
          'https://images-na.ssl-images-amazon.com/images/I/81IaAPXDYDL._AC_SL1500_.jpg',
      'marca': 'Koblenz',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1090',
      'nombre':
          "Motor de engranaje, Walfront AC 220 V 200 W M6200-502 CW/CCW motor reductor de alta velocidad de torque reducir motor eléctrico con regulador de caja de cambios",
      'precio': '8208.85',
      'familia_prod': '302020',
      'imagen':
          'https://images-na.ssl-images-amazon.com/images/I/51ndoEOn9XL._AC_SL1001_.jpg',
      'marca': 'Wal front',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1100',
      'nombre': "Wera 05056491001 Juego de Herramientas con 39 Piezas",
      'precio': '2140.34',
      'familia_prod': '302010',
      'imagen':
          'https://images-na.ssl-images-amazon.com/images/I/81aGRoTjhWL._SL1500_.jpg',
      'marca': 'Wal front',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1110',
      'nombre':
          "Vino Tinto Casa Madero 3V Cabernet Sauvignon Merlot Tempranillo - 750 ml",
      'precio': '389',
      'familia_prod': '2010',
      'imagen':
          'https://images-na.ssl-images-amazon.com/images/I/516AQ85fNhL._AC_SL1000_.jpg',
      'marca': 'Madero',
      'usuario': 'gruporoca'
    },
  ];

  private carrito$ = new Subject<any[]>();
  private carrito = [];

  arrayProductos: ProductoModel[] = [];

  agregarProductoCarrito(producto){

    let productosCarrito = localStorage.getItem('carrito');

    if(productosCarrito){
      this.carrito = JSON.parse(productosCarrito);
      let productoRepetido = this.carrito.find(element => element.claveProducto === producto.claveProducto);
      if(productoRepetido){
        productoRepetido.cantidad = productoRepetido.cantidad + producto.cantidad;
      }else{
        this.carrito.push(producto);
      }
    }else{
      this.carrito.push(producto);
    }
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    this.carrito$.next(this.carrito);
  }

  cargarCarrito(){
    let productosCarrito = localStorage.getItem('carrito');

    return productosCarrito ? JSON.parse(productosCarrito) : [];
  }

  getCarrito$(): Observable<any []>{
    return this.carrito$.asObservable();
  }

  constructor() { 
    this.productos.forEach( (producto) => {
      let obj: ProductoModel = new ProductoModel();
      obj.nombre = producto.nombre;
      obj.imagen = producto.imagen;
      obj.precio = parseFloat(producto.precio);
      obj.claveProducto = producto.clave_producto;
      obj.familiaProducto = producto.familia_prod;
      obj.usuario = producto.usuario;
      this.arrayProductos.push(obj);
    } );
  }

  getProductos(usuario: string){
    return this.arrayProductos.filter( (element) => element.usuario == usuario);
  }

  buscarProducto(claveProducto: string): ProductoModel{
    let res = this.productos.find( (element) => element.clave_producto == claveProducto);
    let obj: ProductoModel = new ProductoModel();
    obj.nombre = res.nombre;
      obj.imagen = res.imagen;
      obj.precio = parseFloat(res.precio);
      obj.claveProducto = res.clave_producto;
      obj.familiaProducto = res.familia_prod;
      obj.descripcion = res.descripcion;
    return obj;
  }

  buscarProductosPorFamilia(claveFamilia: string): ProductoModel []{
    let res = this.productos.filter( element => element.familia_prod == claveFamilia);
    let familia: ProductoModel [] = [];
    res.forEach( element => {
      let obj: ProductoModel = new ProductoModel();
      obj.nombre = element.nombre;
      obj.imagen = element.imagen;
      obj.precio = parseFloat(element.precio);
      obj.claveProducto = element.clave_producto;
      obj.familiaProducto = element.familia_prod;
      obj.descripcion = element.descripcion;
      familia.push(obj);
    });
    return familia;
  }

  getCategorias(): any[]{
    return this.categorias;
  }
}
