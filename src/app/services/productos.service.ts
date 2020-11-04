import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductoModel } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  categorias = [
    {'usuario': 'gruporoca',
    'categorias':[
      {'id': '10', 'nombre': 'Alimento', 'hijos': [
        {'id': '1010', 'nombre': 'Carnes', 'hijos':[]},
        {'id': '1020', 'nombre': 'Verduras', 'hijos':[]},
      ]
    },
      {'id': '20', 'nombre': 'Bedidas', 'hijos':[
        {'id': '2010', 'nombre': 'Vinos', 'hijos':[]},
      ]
    },
      {'id': '30', 'nombre': 'Ferreteria', 'hijos':[
        {'id': '3010', 'nombre': 'Tornillos', 'hijos':[]},
        {'id': '3020', 'nombre': 'Herramientas', 'hijos':[
          {'id': '302010', 'nombre': 'Electricidad', 'hijos':[]},
          {'id': '302020', 'nombre': 'Accesorio de Herramientas', 'hijos':[]},
        ]},
      ]},
    ]
  },
    {'usuario':'applebees',
    'categorias':[
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
    ]},
    {'usuario':'farmacia',
    'categorias':[
      {'id': '41', 'nombre': 'Farmacia', 'hijos': []},
      {'id': '42', 'nombre': 'Diabetes', 'hijos': []},
      {'id': '43', 'nombre': 'Me Quiero Bien', 'hijos': []},
      {'id': '44', 'nombre': 'Bebés', 'hijos': []},
      {'id': '45', 'nombre': 'Derma', 'hijos': []},
      {'id': '46', 'nombre': 'Belleza', 'hijos': []},
      {'id': '47', 'nombre': 'Higiene Personal', 'hijos': []},
      {'id': '48', 'nombre': 'Bienestar Sexual', 'hijos': []},
    ]},
    {'usuario': 'kingo', 'categorias': []},
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
      'clave_producto': '1110',
      'nombre': "Wera 05056491001 Juego de Herramientas con 39 Piezas",
      'precio': '2140.34',
      'familia_prod': '302010',
      'imagen':
          'https://images-na.ssl-images-amazon.com/images/I/81aGRoTjhWL._SL1500_.jpg',
      'marca': 'Wal front',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1120',
      'nombre': "CIRUELAX FORTE 24 COMPRIMIDOS",
      'precio': '141.50',
      'familia_prod': '41',
      'imagen':
          'https://www.fahorro.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/7/8/7803510003409_3.jpg',
      'marca': '',
      'descripcion':
          'Ciruelax® Forte laxante 100% de origen natural para el estreñimiento crónico por su mayor concentración de senósidos, ayudando a mantener la regularidad del intestinos haciendo efecto en un lapso de entre 8 a 12 horas tras la ingesta',
      'usuario':'farmacia',
    },
    {
      'clave_producto': '1130',
      'nombre': "MARCA DEL AHORRO BENCILPENICILINA PROC/CRISTA 400000UI",
      'precio': '44.00',
      'familia_prod': '41',
      'imagen':
          'https://www.fahorro.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/7/5/7502223700208.jpg',
      'marca': '',
      'descripcion':
          'Ciruelax® Forte laxante 100% de origen natural para el estreñimiento crónico por su mayor concentración de senósidos, ayudando a mantener la regularidad del intestinos haciendo efecto en un lapso de entre 8 a 12 horas tras la ingesta',
      'usuario':'farmacia',
    },
    {
      'clave_producto': '1140',
      'nombre': "NESTLÉ OTIFIBRE SUPLEMENTO ALIMENTICIO 125 G",
      'precio': '165.00',
      'familia_prod': '41',
      'imagen':
          'https://www.fahorro.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/7/5/7501058644329_1.jpg',
      'marca': '',
      'descripcion':
          'Ciruelax® Forte laxante 100% de origen natural para el estreñimiento crónico por su mayor concentración de senósidos, ayudando a mantener la regularidad del intestinos haciendo efecto en un lapso de entre 8 a 12 horas tras la ingesta',
      'usuario':'farmacia',
    },
    {
      'clave_producto': '1150',
      'nombre': "PACK MEDIDOR SELECT PLUS FLEX + 1 CAJA DE 50 TIRAS TIRA",
      'precio': '622.00',
      'familia_prod': '42',
      'imagen':
          'https://www.fahorro.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/7/5/7501554500556.jpg',
      'marca': '',
      'descripcion':
          'Ciruelax® Forte laxante 100% de origen natural para el estreñimiento crónico por su mayor concentración de senósidos, ayudando a mantener la regularidad del intestinos haciendo efecto en un lapso de entre 8 a 12 horas tras la ingesta',
      'usuario':'farmacia',
    },
    {
      'clave_producto': '1160',
      'nombre': "MICRODACYN 60 240 ML SOLUCION",
      'precio': '233.50',
      'familia_prod': '42',
      'imagen':
          'https://www.fahorro.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/7/5/7503006698323_1.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'farmacia',
    },
    {
      'clave_producto': '1170',
      'nombre': "TRUSNACK PURE COCOA 120 G",
      'precio': '62.00',
      'familia_prod': '43',
      'imagen':
          'https://www.fahorro.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/7/5/7503015190221_1.jpg',
      'marca': '',
      'descripcion':
          'Ciruelax® Forte laxante 100% de origen natural para el estreñimiento crónico por su mayor concentración de senósidos, ayudando a mantener la regularidad del intestinos haciendo efecto en un lapso de entre 8 a 12 horas tras la ingesta',
      'usuario':'farmacia',
    },
    {
      'clave_producto': '1180',
      'nombre': "VIDANAT CLOROFILA CON SPIRULINA 500 ML",
      'precio': '92.00',
      'familia_prod': '43',
      'imagen':
          'https://www.fahorro.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/7/5/7501060802861_1.jpg',
      'marca': '',
      'descripcion':
          'Ciruelax® Forte laxante 100% de origen natural para el estreñimiento crónico por su mayor concentración de senósidos, ayudando a mantener la regularidad del intestinos haciendo efecto en un lapso de entre 8 a 12 horas tras la ingesta',
      'usuario':'farmacia',
    },
    {
      'clave_producto': '1190',
      'nombre': "FORMULA LÁCTEA NAN 3 OPTIPRO BAJA EN LACTOSA 800 GR",
      'precio': '236.00',
      'familia_prod': '44',
      'imagen':
          'https://www.fahorro.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/7/5/7501058627933_1.jpg',
      'marca': '',
      'descripcion':
          'Ciruelax® Forte laxante 100% de origen natural para el estreñimiento crónico por su mayor concentración de senósidos, ayudando a mantener la regularidad del intestinos haciendo efecto en un lapso de entre 8 a 12 horas tras la ingesta',
      'usuario':'farmacia',
    },
    {
      'clave_producto': '1200',
      'nombre': "UMBRELLA BASE COMPACTA SPF 50 DURAZNO",
      'precio': '518.00',
      'familia_prod': '45',
      'imagen':
          'https://www.fahorro.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/7/7/7703281002369.jpg',
      'marca': '',
      'descripcion':
          'Protector solar facial compacto',
      'usuario':'farmacia',
    },
    {
      'clave_producto': '1210',
      'nombre': "EUCERIN KIDS SUN SPRAY FPS 50+ 200ML",
      'precio': '566.00',
      'familia_prod': '45',
      'imagen':
          'https://www.fahorro.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/4/0/4005800230073_1.jpg',
      'marca': '',
      'descripcion':
          'Ciruelax® Forte laxante 100% de origen natural para el estreñimiento crónico por su mayor concentración de senósidos, ayudando a mantener la regularidad del intestinos haciendo efecto en un lapso de entre 8 a 12 horas tras la ingesta',
      'usuario':'farmacia',
    },
    {
      'clave_producto': '1220',
      'nombre': "BIODERMA ABCDERM MOUSSANT 1000 ML",
      'precio': '381.00',
      'familia_prod': '45',
      'imagen':
          'https://www.fahorro.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/3/4/3401397163618.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'farmacia',
    },
    {
      'clave_producto': '1230',
      'nombre': "PRESERVATIVO PRUDENCE CLÁSICO CON 3 PIEZAS",
      'precio': '38.00',
      'familia_prod': '48',
      'imagen':
          'https://www.fahorro.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/7/5/7502214980015.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'farmacia',
    },
    {
      'clave_producto': '1510',
      'nombre': "EscuSoft-Inscripciones-Online",
      'precio': '3800.00',
      'familia_prod': '',
      'imagen':
          'http://kingo.com.mx/wp-content/uploads/2020/06/1-Fichas-Online.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'kingo',
    },
    {
      'clave_producto': '1520',
      'nombre': "Factura Electrónica Nube + 100 Timbres Fiscal",
      'precio': '800.00',
      'familia_prod': '',
      'imagen':
          'http://kingo.com.mx/wp-content/uploads/2020/07/1-Factura-Electronica.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'kingo',
    },
    {
      'clave_producto': '1530',
      'nombre': "Maines ADMIN",
      'precio': '2500.00',
      'familia_prod': '',
      'imagen':
          'http://kingo.com.mx/wp-content/uploads/2020/07/1-Maines-ADMIN.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'kingo',
    },
    {
      'clave_producto': '1580',
      'nombre': "Maines Contabilidad",
      'precio': '2500.00',
      'familia_prod': '',
      'imagen':
          'http://kingo.com.mx/wp-content/uploads/2020/07/1-Maines-Contabilidad.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'kingo',
    },
    {
      'clave_producto': '1540',
      'nombre': "Maines Nómina Electrónica",
      'precio': '',
      'familia_prod': '',
      'imagen':
          'http://kingo.com.mx/wp-content/uploads/2020/07/1-Nomina.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'kingo',
    },
    {
      'clave_producto': '1550',
      'nombre': "Maines-Restaurant",
      'precio': '2500.00',
      'familia_prod': '',
      'imagen':
          'http://kingo.com.mx/wp-content/uploads/2020/07/1-Maines-Restaurant.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'kingo',
    },
    {
      'clave_producto': '1560',
      'nombre': "Maines-XML Descargas",
      'precio': '600.00',
      'familia_prod': '',
      'imagen':
          'http://kingo.com.mx/wp-content/uploads/2020/07/1-Maines-XML.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'kingo',
    },
    {
      'clave_producto': '1570',
      'nombre': "Servidor para Clases Online",
      'precio': '',
      'familia_prod': '',
      'imagen':
          'http://kingo.com.mx/wp-content/uploads/2020/03/1-Clases-Online.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'kingo',
    }
  ];

  carousel = [
    {'usuario': 'applebees', 
     'carousel': [
       'https://firebasestorage.googleapis.com/v0/b/database-app-1964b.appspot.com/o/img1.JPG?alt=media&token=a401e09d-ad71-42ba-987b-2c6719868e55',
       'https://firebasestorage.googleapis.com/v0/b/database-app-1964b.appspot.com/o/img2.JPG?alt=media&token=823aa356-b978-4d0f-8b85-603955c5efba',
       'https://firebasestorage.googleapis.com/v0/b/database-app-1964b.appspot.com/o/img3.JPG?alt=media&token=09dec8f2-5636-4321-8601-75d1629b9dfe'
     ]
    },
    {'usuario':'farmacia',
     'carousel': [
       'https://www.fahorro.com/media/never8/Teleorientacion-medica-integral-1400x480_5f9ed55d6c3e2.jpg',
       'https://www.fahorro.com/media/never8/Nido-nov-1400x480_5f9ed6252a590.jpg',
       'https://www.fahorro.com/media/never8/Agrifen-nov-1400X480_5f9ed6f944b50.jpg',
       'https://www.fahorro.com/media/never8/Buenfin-oct-1400x480_5f9ed495a791b.jpg', 
     ]
    },
    {'usuario':'gruporoca',
    'carousel': [
       'https://www.cemexpuertorico.com/documents/46756837/46757588/construrama-logo-blue.png/d36bcc4a-c6ce-7f5e-6225-dea4ba85aa41?t=1534890676932',
       'https://construramasantafehmo.com/img/3823/748.jpeg',
       'https://acerosycomplementos.com.mx/wp-content/uploads/2018/07/1.jpg'
     ]
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

  getCategorias(usuario: string): any{
    return this.categorias.find( (element) =>  element.usuario == usuario);
  }

  getCarousel(usuario: string):  any{
    return this.carousel.find( (element) =>  element.usuario == usuario);
  }
}
