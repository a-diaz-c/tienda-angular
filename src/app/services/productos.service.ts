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
      {'id': '60', 'nombre': 'Cemento', 'hijos': []},
      {'id': '62', 'nombre': 'Aceros', 'hijos': [
        {'id': '6210', 'nombre': 'Alambre y Alambrón', 'hijos': []},
      ]},
      {'id': '63', 'nombre': 'Otros Materiales', 'hijos': []},
      {'id': '64', 'nombre': 'Acabados', 'hijos': []},
      {'id': '65', 'nombre': 'Plomería', 'hijos': []},
      {'id': '66', 'nombre': 'Material Eléctrico', 'hijos': []},
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
      'clave_producto': '1110',
      'nombre': "Cemento CEMEX EXTRA",
      'precio': '',
      'familia_prod': '60',
      'imagen':
          'https://www.cemexmexico.com/documents/27057941/46475685/tarjeta-productos-cemento-extra-3.jpg/33521c2b-5d52-ad27-b70b-ae72f72b1d09?t=1603467297227',
      'marca': 'Wal front',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1120',
      'nombre': "Cemento CEMEX Impercem",
      'precio': '',
      'familia_prod': '60',
      'imagen': 'https://www.cemexmexico.com/documents/27057941/46475685/cemex-mexico-saco-impercem.png/6e54b096-0ec8-722b-1d2c-697eb1676ca0?t=1596755641896',
      'marca': 'Wal front',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1130',
      'nombre': "Cemento Blanco CEMEX",
      'precio': '',
      'familia_prod': '60',
      'imagen':
          'https://www.cemexmexico.com/documents/27057941/46475685/cemex-mexico-saco-cemento-blanco.png/5a84f09b-e0e3-86c1-5287-708573f85910?t=1596755640882',
      'marca': 'Cemex',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1140',
      'nombre': "Fiero, Alambre Galvanizado, Calibre 22, Kilogramos",
      'precio': '',
      'familia_prod': '6210',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w5NTY1MHxpbWFnZS9qcGVnfGltYWdlcy9oZjUvaDAwLzg4NDQzMjE5NDc2NzguanBnfDA5ZTBmNTE4YWNiZWI3OTgwZjA5NTZlNjNjNGMwMTRlYzU1ODZiYTY3MmIzZDNjMDZjMWM2ZGY2MjA3M2Y3YWE',
      'marca': 'Cemex',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1150',
      'nombre': "Bronco, Alambre Puas 34Kg 340M Cal12 Roll, Pieza",
      'precio': '',
      'familia_prod': '6210',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wxMjMyMzN8aW1hZ2UvanBlZ3xpbWFnZXMvaGUyL2hiZi84ODQ0MzIxOTE0OTEwLmpwZ3xjM2QzNDk0YzJjYmZlM2Q2MTExYjgxMmEyMmY3MTQzMDJhMGZkYzZlMmY4NzUwNzJlMzkzY2M5NDAxZjUyNTg5',
      'marca': 'Cemex',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1160',
      'nombre': "Tabique Rojo Recocido 5 X 12 X 23 cm, Pieza",
      'precio': '',
      'familia_prod': '63',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w2NzU4MHxpbWFnZS9qcGVnfGltYWdlcy9oMTkvaDAzLzg4ODAwNDM5ODI4NzguanBnfDkwYThlYjk3MTRmOWEyNDY2OWExMGU1ZGNiNzc5NmJiMzAzZjIzZDUzMjAwZjk3N2MzZDZkNDE3NDhmNjA3ODM',
      'marca': 'Cemex',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1170',
      'nombre': "Ladrillo Rojo 2 X 12 X 23 cm, Millar",
      'precio': '',
      'familia_prod': '63',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wyODYwMnxpbWFnZS9qcGVnfGltYWdlcy9oMTMvaGNhLzg4ODAwNDQxNzk0ODYuanBnfDUzMTJhOTE1MWRlNTdjMjc2ZDRlMzIwYWQ3OWRmOTgwYjhlZjEzNGMxMmJjOTAwYWFkODQzM2E2Y2JiYWE1OGY',
      'marca': 'Cemex',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1180',
      'nombre': "Weno, Cemento Acrilico 3.8 L, Pieza",
      'precio': '',
      'familia_prod': '64',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wxMDMxNzV8aW1hZ2UvanBlZ3xpbWFnZXMvaDRmL2gxZC84ODc0OTc4NTc0MzY2LmpwZ3xmY2MxOWJmMzg1YTZlOGJjMzg5YmY5OTcwMmI4MGRjN2E4ZGIxYjA1YmM5NTM0ODcwODNhNWU0ZDc5N2U1ZWY0',
      'marca': 'Cemex',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1190',
      'nombre': "Grano Gris #2, Saco",
      'precio': '',
      'familia_prod': '64',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w0MTc2MDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDk3L2hkNy84ODgyMDM1ODUxMjk0LmpwZ3xiNDQ3Y2NjZTcxMzM0NDE2MTE1ZWQ1NWNhZWNiNjU2NDk0NzdlY2Q4MmM2MmYxYWQ0N2M1M2Y0Y2ViNTVjZDQ2',
      'marca': 'GENÉRICO',
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
       'https://www.cemexmexico.com/documents/27057941/49641127/home-soluciones.jpg',
       'https://www.cemexmexico.com/documents/27057941/49642387/2020-home-banner-memoria-ds-2019.jpg',
       'https://www.cemexmexico.com/documents/27057941/49642387/2020-home-banner-ponte-a-prueba.jpg',
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
