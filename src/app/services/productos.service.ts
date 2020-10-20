import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Observable, Subject } from 'rxjs';
import { ProductoModel } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  categorias = [
    {'id': '30', 'nombre': 'Hambuergesas', 'hijos': []},
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
          'Hamburguesa con trocitos de brisket de res BBQ, cebolla, chile jalapeño fresco, queso Cheddar blanco y nuestra salsa especial de la casa.'
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
          'Hamburguesa cubierta con crujientes tiras de cebolla, queso Cheddar blanco, tocino ahumado, lechuga, tomate, cebolla, pepinillos y salsa BBQ.'
    },
    {
      'clave_producto': '103',
      'nombre': "Avocado Burger",
      'precio': '100.00',
      'familia_prod': '30',
      'imagen':
          'https://menu.applebees.com.mx/wp-content/uploads/2020/06/Avocado-Burger.jpg',
      'marca': '',
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
      'descripcion': ''
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
      this.arrayProductos.push(obj);
    } );
  }

  getProductos(){
    return this.arrayProductos;
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

  getCategorias(): any[]{
    return this.categorias;
  }
}
