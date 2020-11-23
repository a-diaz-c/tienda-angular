import { Injectable } from '@angular/core';
import { element } from 'protractor';
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
      {'id': '66', 'nombre': 'Material Eléctrico', 'hijos': [
        {'id': '6610', 'nombre': 'Conectores y Accesorios Eléctricos', 'hijos': []},
        {'id': '6620', 'nombre': 'Canalización y Fijación', 'hijos': []},
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
    {'usuario': 'tienda', 'categorias': [
      {'id': '50', 'nombre': 'Adaminstración', 'hijos': []},
      {'id': '51', 'nombre': 'Contabilidad', 'hijos': []},
      {'id': '53', 'nombre': 'Nomina y RH', 'hijos': []},
      {'id': '54', 'nombre': 'Producción', 'hijos': []},
      {'id': '55', 'nombre': 'Tiendas Online', 'hijos': []},
      {'id': '56', 'nombre': 'Facturación y Timbres', 'hijos': []},
      {'id': '57', 'nombre': 'Punto de Venta', 'hijos': []},
      {'id': '58', 'nombre': 'Escuelas', 'hijos': []},
    ]},
    {'usuario': 'zapateria', 'categorias': [
      {'id': '01', 'nombre': 'Tenis', 'hijos': []},
      {'id': '02', 'nombre': 'Botas y Botinetas', 'hijos': []},
      {'id': '03', 'nombre': 'Sandalias y Ojotas', 'hijos': []},
      {'id': '04', 'nombre': 'Mocasines y Náuticos', 'hijos': []},
      {'id': '05', 'nombre': 'Zapatillas y Tacones', 'hijos': []},
    ]},
    {
      'usuario': 'pollo', 'categorias': []
    },
    {
      'usuario': 'tarascos', 'categorias': [
        {'id': '91', 'nombre': 'Entradas', 'hijos': []},
        {'id': '92', 'nombre': 'Sopas', 'hijos': []},
        {'id': '93', 'nombre': 'Especialidades', 'hijos': []},
        {'id': '94', 'nombre': 'Tortas', 'hijos': []},
        
      ]
    }
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
      'clave_producto': '1510',
      'nombre': "Cemento CEMEX EXTRA",
      'precio': '152.51',
      'familia_prod': '60',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w3NDUyNTB8aW1hZ2UvcG5nfGltYWdlcy9oYmMvaGZiLzg4NzAyODgwOTczMTAucG5nfDM2YWQ5YTdlY2U2ZmQ1MDQwYWI5NzM2ZWY5MDAyYTljMjcwOGIxODM5YTJhNTZjZTliMDY1ZmU1NDg3NGRlOGY',
      'marca': 'Wal front',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1520',
      'nombre': "Tolteca, Cemento Impercem Cpc30R 50 Kg, Saco",
      'precio': '154.00',
      'familia_prod': '60',
      'imagen': 'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wxNDI0NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDZlL2hkYy84OTQyNzk5MDYxMDIyLmpwZ3xlNjE1NDE4ZjQ0Y2ExN2NjMDAwOGQ1MTFmMTIwMTE1MjhkMmNmMmFlZDc2ZTlkZDhhMDdlNGQ0MjIzNTE5ZmU0',
      'marca': 'Wal front',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1530',
      'nombre': "Cemex, Cemento Blanco Cpc30Rb 25 Kg, Saco",
      'precio': '130.00',
      'familia_prod': '60',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wzMjg1MTJ8aW1hZ2UvcG5nfGltYWdlcy9oNzkvaGEwLzg4NDQzMTk5ODE1OTgucG5nfDA4ZDVkYTQ1NTEzNmEzODQ2ZjYyZDNhMWNiNGMxYjJkMjJlNzAyYWYxNDE4NjI3OWM0MDhkM2ZmYWY1YjhlMjY',
      'marca': 'Cemex',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1540',
      'nombre': "Fiero, Alambre Galvanizado, Calibre 22, Kilogramos",
      'precio': '68.60',
      'familia_prod': '6210',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w5NTY1MHxpbWFnZS9qcGVnfGltYWdlcy9oZjUvaDAwLzg4NDQzMjE5NDc2NzguanBnfDA5ZTBmNTE4YWNiZWI3OTgwZjA5NTZlNjNjNGMwMTRlYzU1ODZiYTY3MmIzZDNjMDZjMWM2ZGY2MjA3M2Y3YWE',
      'marca': 'Cemex',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1550',
      'nombre': "Bronco, Alambre Puas 34Kg 340M Cal12 Roll, Pieza",
      'precio': '25.50',
      'familia_prod': '6210',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wxMjMyMzN8aW1hZ2UvanBlZ3xpbWFnZXMvaGUyL2hiZi84ODQ0MzIxOTE0OTEwLmpwZ3xjM2QzNDk0YzJjYmZlM2Q2MTExYjgxMmEyMmY3MTQzMDJhMGZkYzZlMmY4NzUwNzJlMzkzY2M5NDAxZjUyNTg5',
      'marca': 'Cemex',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1560',
      'nombre': "Tabique Rojo Recocido 5 X 12 X 23 cm, Pieza",
      'precio': '3.12',
      'familia_prod': '63',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w2NzU4MHxpbWFnZS9qcGVnfGltYWdlcy9oMTkvaDAzLzg4ODAwNDM5ODI4NzguanBnfDkwYThlYjk3MTRmOWEyNDY2OWExMGU1ZGNiNzc5NmJiMzAzZjIzZDUzMjAwZjk3N2MzZDZkNDE3NDhmNjA3ODM',
      'marca': 'Cemex',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1570',
      'nombre': "Ladrillo Rojo 2 X 12 X 23 cm, Millar",
      'precio': '6.99',
      'familia_prod': '63',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wyODYwMnxpbWFnZS9qcGVnfGltYWdlcy9oMTMvaGNhLzg4ODAwNDQxNzk0ODYuanBnfDUzMTJhOTE1MWRlNTdjMjc2ZDRlMzIwYWQ3OWRmOTgwYjhlZjEzNGMxMmJjOTAwYWFkODQzM2E2Y2JiYWE1OGY',
      'marca': 'Cemex',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1580',
      'nombre': "Weno, Cemento Acrilico 3.8 L, Pieza",
      'precio': '100.00',
      'familia_prod': '64',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wxMDMxNzV8aW1hZ2UvanBlZ3xpbWFnZXMvaDRmL2gxZC84ODc0OTc4NTc0MzY2LmpwZ3xmY2MxOWJmMzg1YTZlOGJjMzg5YmY5OTcwMmI4MGRjN2E4ZGIxYjA1YmM5NTM0ODcwODNhNWU0ZDc5N2U1ZWY0',
      'marca': 'Cemex',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1590',
      'nombre': "Grano Gris #2, Saco",
      'precio': '580.00',
      'familia_prod': '64',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w0MTc2MDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDk3L2hkNy84ODgyMDM1ODUxMjk0LmpwZ3xiNDQ3Y2NjZTcxMzM0NDE2MTE1ZWQ1NWNhZWNiNjU2NDk0NzdlY2Q4MmM2MmYxYWQ0N2M1M2Y0Y2ViNTVjZDQ2',
      'marca': 'GENÉRICO',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1600',
      'nombre': "Foset, Adaptador Macho De Cpvc Con Inserto Metálico (19 Mm) 3/4', Pieza",
      'precio': '22.00',
      'familia_prod': '65',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w2ODIyNXxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaDk3Lzg4NjExNjU3NDgyNTQuanBnfDc1MDYzZmVhMTc2OTJiMDIxZjdlZDZlMTAyOWZmYmM2YzI1NjYyOGI2NWMyMGQyZDM1N2E1NjE3ZDgwM2I1NTE',
      'marca': 'GENÉRICO',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1601',
      'nombre': "Cresco, Codo Pvc Sanitario 45 X 4\", Pieza",
      'precio': '16.62',
      'familia_prod': '65',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wzOTc0M3xpbWFnZS9qcGVnfGltYWdlcy9oN2IvaDYyLzg4NzQ0ODgzOTc4NTQuanBnfDY0OTg5YmMwMWFkYTA1ODQ4MTYxMmMzZGI5MTI5MGFlMTU0ZTlkYWRjZjkwODgyMmNhMzgwYTY2M2ZkNDgwZjQ',
      'marca': 'GENÉRICO',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1610',
      'nombre': "Cnx, Cpvc Tee 1/2\" Flow Guard, Pieza",
      'precio': '22.00',
      'familia_prod': '65',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w1MjUwOXxpbWFnZS9qcGVnfGltYWdlcy9oZDUvaGI0Lzg4NjY3MTI1NTE0NTQuanBnfDg2MmU5ZTFjZDBmMzllNmQ3N2QyMzI5Mjg3YzA3MTA2MWU0YmRkMzQ3MjBiZWI3ZWYyOWYzZmI5NzE1NWU3Mzg',
      'marca': 'GENÉRICO',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1620',
      'nombre': "Iusa, Cobre Codo Rosca Ext. 1/2\", Pieza",
      'precio': '20.00',
      'familia_prod': '65',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wxMjY1NDh8aW1hZ2UvanBlZ3xpbWFnZXMvaGQwL2hmMS84ODY2NzEyOTQ0NjcwLmpwZ3wwMjM3YjcyZTI0NDRhOTZhN2RhODBmOWU4YjE0YWIzNTU0NTAxNWZkMGE5ZGMzNGU0NjVhMzllYWFlOWQ4MGFj',
      'marca': 'GENÉRICO',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1630',
      'nombre': "Volteck, Plafón Redondo Decorativo 15W 6500K Led, Pieza",
      'precio': '55.00',
      'familia_prod': '6610',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w2MDc4OXxpbWFnZS9qcGVnfGltYWdlcy9oZjYvaDU0Lzg4OTkwMDk2NDI1MjYuanBnfDM0NjZhOTQyOWUxOTJjY2VmYjQ1MmQ0MjgyMDE3MmI4ZjMwOWQyODU3ZWRhOTM1OTZiNzE2MDczMjRjODRmYmE',
      'marca': 'GENÉRICO',
      'usuario': 'gruporoca'
    },
    {
      'clave_producto': '1640',
      'nombre': "Volteck, Contacto Doble, Línea Italiana, Pieza",
      'precio': '60.00',
      'familia_prod': '6610',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wyMTMwMnxpbWFnZS9qcGVnfGltYWdlcy9oYzcvaDhhLzg4NTI5MzU0MDk2OTQuanBnfDVhNzljYzFlNjlkMDI0NGRjMjQyM2JiMDE0MzliM2I4MGY5YWZkNjQ0ZjRlMjUxNzA2OTk0MzczYTBjYThjNmM',
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
      'clave_producto': '3510',
      'nombre': "EscuSoft-Inscripciones-Online",
      'precio': '3800.00',
      'familia_prod': '58',
      'imagen':
          'http://kingo.com.mx/wp-content/uploads/2020/06/1-Fichas-Online.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'tienda',
    },
    {
      'clave_producto': '3520',
      'nombre': "Factura Electrónica Nube + 100 Timbres Fiscal",
      'precio': '800.00',
      'familia_prod': '56',
      'imagen':
          'http://kingo.com.mx/wp-content/uploads/2020/07/1-Factura-Electronica.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'tienda',
    },
    {
      'clave_producto': '3530',
      'nombre': "Maines ADMIN",
      'precio': '2500.00',
      'familia_prod': '50',
      'imagen':
          'http://kingo.com.mx/wp-content/uploads/2020/07/1-Maines-ADMIN.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'tienda',
    },
    {
      'clave_producto': '3580',
      'nombre': "Maines Contabilidad",
      'precio': '2500.00',
      'familia_prod': '51',
      'imagen':
          'http://kingo.com.mx/wp-content/uploads/2020/07/1-Maines-Contabilidad.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'tienda',
    },
    {
      'clave_producto': '3540',
      'nombre': "Maines Nómina Electrónica",
      'precio': '',
      'familia_prod': '53',
      'imagen':
          'http://kingo.com.mx/wp-content/uploads/2020/07/1-Nomina.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'tienda',
    },
    {
      'clave_producto': '3550',
      'nombre': "Maines-Restaurant",
      'precio': '2500.00',
      'familia_prod': '57',
      'imagen':
          'http://kingo.com.mx/wp-content/uploads/2020/07/1-Maines-Restaurant.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'tienda',
    },
    {
      'clave_producto': '3560',
      'nombre': "Maines-XML Descargas",
      'precio': '600.00',
      'familia_prod': '51',
      'imagen':
          'http://kingo.com.mx/wp-content/uploads/2020/07/1-Maines-XML.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'tienda',
    },
    {
      'clave_producto': '3570',
      'nombre': "Servidor para Clases Online",
      'precio': '',
      'familia_prod': '58',
      'imagen':
          'http://kingo.com.mx/wp-content/uploads/2020/03/1-Clases-Online.jpg',
      'marca': '',
      'descripcion':
          '',
      'usuario':'tienda',
    },
    {
      'clave_producto': '2000',
      'nombre': "Bulto De Cemento Holcin Apasco 50 Kg",
      'precio': '152.51',
      'familia_prod': '60',
      'imagen':
          'https://http2.mlstatic.com/D_NQ_NP_762813-MLM43148022200_082020-O.webp',
      'marca': '',
      'usuario': 'autopistadelsol'
    },
    {
      'clave_producto': '2003',
      'nombre': "Fiero, Alambre Galvanizado, Calibre 22, Kilogramos",
      'precio': '68.60',
      'familia_prod': '6210',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w5NTY1MHxpbWFnZS9qcGVnfGltYWdlcy9oZjUvaDAwLzg4NDQzMjE5NDc2NzguanBnfDA5ZTBmNTE4YWNiZWI3OTgwZjA5NTZlNjNjNGMwMTRlYzU1ODZiYTY3MmIzZDNjMDZjMWM2ZGY2MjA3M2Y3YWE',
      'marca': 'Cemex',
      'usuario': 'autopistadelsol'
    },
    {
      'clave_producto': '2004',
      'nombre': "Bronco, Alambre Puas 34Kg 340M Cal12 Roll, Pieza",
      'precio': '25.50',
      'familia_prod': '6210',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wxMjMyMzN8aW1hZ2UvanBlZ3xpbWFnZXMvaGUyL2hiZi84ODQ0MzIxOTE0OTEwLmpwZ3xjM2QzNDk0YzJjYmZlM2Q2MTExYjgxMmEyMmY3MTQzMDJhMGZkYzZlMmY4NzUwNzJlMzkzY2M5NDAxZjUyNTg5',
      'marca': 'Cemex',
      'usuario': 'autopistadelsol'
    },
    {
      'clave_producto': '2004',
      'nombre': "Tabique Rojo Recocido 5 X 12 X 23 cm, Pieza",
      'precio': '3.12',
      'familia_prod': '63',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w2NzU4MHxpbWFnZS9qcGVnfGltYWdlcy9oMTkvaDAzLzg4ODAwNDM5ODI4NzguanBnfDkwYThlYjk3MTRmOWEyNDY2OWExMGU1ZGNiNzc5NmJiMzAzZjIzZDUzMjAwZjk3N2MzZDZkNDE3NDhmNjA3ODM',
      'marca': 'Cemex',
      'usuario': 'autopistadelsol'
    },
    {
      'clave_producto': '2005',
      'nombre': "Ladrillo Rojo 2 X 12 X 23 cm, Millar",
      'precio': '6.99',
      'familia_prod': '63',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wyODYwMnxpbWFnZS9qcGVnfGltYWdlcy9oMTMvaGNhLzg4ODAwNDQxNzk0ODYuanBnfDUzMTJhOTE1MWRlNTdjMjc2ZDRlMzIwYWQ3OWRmOTgwYjhlZjEzNGMxMmJjOTAwYWFkODQzM2E2Y2JiYWE1OGY',
      'marca': 'Cemex',
      'usuario': 'autopistadelsol'
    },
    {
      'clave_producto': '2006',
      'nombre': "Weno, Cemento Acrilico 3.8 L, Pieza",
      'precio': '100.00',
      'familia_prod': '64',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wxMDMxNzV8aW1hZ2UvanBlZ3xpbWFnZXMvaDRmL2gxZC84ODc0OTc4NTc0MzY2LmpwZ3xmY2MxOWJmMzg1YTZlOGJjMzg5YmY5OTcwMmI4MGRjN2E4ZGIxYjA1YmM5NTM0ODcwODNhNWU0ZDc5N2U1ZWY0',
      'marca': 'Cemex',
      'usuario': 'autopistadelsol'
    },
    {
      'clave_producto': '2007',
      'nombre': "Grano Gris #2, Saco",
      'precio': '580.00',
      'familia_prod': '64',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w0MTc2MDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDk3L2hkNy84ODgyMDM1ODUxMjk0LmpwZ3xiNDQ3Y2NjZTcxMzM0NDE2MTE1ZWQ1NWNhZWNiNjU2NDk0NzdlY2Q4MmM2MmYxYWQ0N2M1M2Y0Y2ViNTVjZDQ2',
      'marca': 'GENÉRICO',
      'usuario': 'autopistadelsol'
    },
    {
      'clave_producto': '2008',
      'nombre': "Foset, Adaptador Macho De Cpvc Con Inserto Metálico (19 Mm) 3/4', Pieza",
      'precio': '22.00',
      'familia_prod': '65',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w2ODIyNXxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaDk3Lzg4NjExNjU3NDgyNTQuanBnfDc1MDYzZmVhMTc2OTJiMDIxZjdlZDZlMTAyOWZmYmM2YzI1NjYyOGI2NWMyMGQyZDM1N2E1NjE3ZDgwM2I1NTE',
      'marca': 'GENÉRICO',
      'usuario': 'autopistadelsol'
    },
    {
      'clave_producto': '2010',
      'nombre': "Cresco, Codo Pvc Sanitario 45 X 4\", Pieza",
      'precio': '16.62',
      'familia_prod': '65',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wzOTc0M3xpbWFnZS9qcGVnfGltYWdlcy9oN2IvaDYyLzg4NzQ0ODgzOTc4NTQuanBnfDY0OTg5YmMwMWFkYTA1ODQ4MTYxMmMzZGI5MTI5MGFlMTU0ZTlkYWRjZjkwODgyMmNhMzgwYTY2M2ZkNDgwZjQ',
      'marca': 'GENÉRICO',
      'usuario': 'autopistadelsol'
    },
    {
      'clave_producto': '2011',
      'nombre': "Cnx, Cpvc Tee 1/2\" Flow Guard, Pieza",
      'precio': '22.00',
      'familia_prod': '65',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w1MjUwOXxpbWFnZS9qcGVnfGltYWdlcy9oZDUvaGI0Lzg4NjY3MTI1NTE0NTQuanBnfDg2MmU5ZTFjZDBmMzllNmQ3N2QyMzI5Mjg3YzA3MTA2MWU0YmRkMzQ3MjBiZWI3ZWYyOWYzZmI5NzE1NWU3Mzg',
      'marca': 'GENÉRICO',
      'usuario': 'autopistadelsol'
    },
    {
      'clave_producto': '2012',
      'nombre': "Iusa, Cobre Codo Rosca Ext. 1/2\", Pieza",
      'precio': '20.00',
      'familia_prod': '65',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wxMjY1NDh8aW1hZ2UvanBlZ3xpbWFnZXMvaGQwL2hmMS84ODY2NzEyOTQ0NjcwLmpwZ3wwMjM3YjcyZTI0NDRhOTZhN2RhODBmOWU4YjE0YWIzNTU0NTAxNWZkMGE5ZGMzNGU0NjVhMzllYWFlOWQ4MGFj',
      'marca': 'GENÉRICO',
      'usuario': 'autopistadelsol'
    },
    {
      'clave_producto': '2013',
      'nombre': "Volteck, Plafón Redondo Decorativo 15W 6500K Led, Pieza",
      'precio': '55.00',
      'familia_prod': '6610',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w2MDc4OXxpbWFnZS9qcGVnfGltYWdlcy9oZjYvaDU0Lzg4OTkwMDk2NDI1MjYuanBnfDM0NjZhOTQyOWUxOTJjY2VmYjQ1MmQ0MjgyMDE3MmI4ZjMwOWQyODU3ZWRhOTM1OTZiNzE2MDczMjRjODRmYmE',
      'marca': 'GENÉRICO',
      'usuario': 'autopistadelsol'
    },
    {
      'clave_producto': '2014',
      'nombre': "Volteck, Contacto Doble, Línea Italiana, Pieza",
      'precio': '60.00',
      'familia_prod': '6610',
      'imagen':
          'https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wyMTMwMnxpbWFnZS9qcGVnfGltYWdlcy9oYzcvaDhhLzg4NTI5MzU0MDk2OTQuanBnfDVhNzljYzFlNjlkMDI0NGRjMjQyM2JiMDE0MzliM2I4MGY5YWZkNjQ0ZjRlMjUxNzA2OTk0MzczYTBjYThjNmM',
      'marca': 'GENÉRICO',
      'usuario': 'autopistadelsol'
    },
    {
      'clave_producto': '2201',
      'nombre': "Zapato Mocasin Fresco De Caballero Textil Marinero",
      'precio': '600.00',
      'familia_prod': '04',
      'descripcion':'',
      'imagen':
          'https://http2.mlstatic.com/D_NQ_NP_600298-MLM31999602748_082019-O.webp',
      'marca': 'GENÉRICO',
      'usuario': 'zapateria',
      'otros': {
        'color': [ 
          {'nombre':'cafe', 'image': [
            'https://http2.mlstatic.com/D_NQ_NP_600298-MLM31999602748_082019-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_945299-MLM31999605847_082019-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_632646-MLM31999606199_082019-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_969781-MLM31999606357_082019-O.webp'
            

          ], 'codigo': '#004380'}, 
          {'nombre':'azul', 'image': [
            'https://http2.mlstatic.com/D_NQ_NP_980184-MLM31999603190_082019-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_753573-MLM31999606193_082019-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_977934-MLM31999606408_082019-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_949428-MLM31999608941_082019-O.webp'
            
        ], 'codigo': '#804000'}
        ],
        'talla': [ '22', '23', '24', '25']
      }
    },
    {
      'clave_producto': '2202',
      'nombre': "Zapato",
      'precio': '600.00',
      'familia_prod': '04',
      'descripcion':'',
      'imagen':
          'https://http2.mlstatic.com/D_NQ_NP_2X_616580-MLM40581948747_012020-F.webp',
      'marca': 'GENÉRICO',
      'usuario': 'zapateria',
      'otros': {
        'talla': [ '22', '23', '24', '25']
      },
    },
    {
      'clave_producto': '2203',
      'nombre': "Zapatos Acuáticos Playa",
      'precio': '197',
      'familia_prod': '01',
      'descripcion':'',
      'imagen':
          'https://http2.mlstatic.com/D_NQ_NP_655645-MLM30752881573_052019-O.webp',
      'marca': 'GENÉRICO',
      'usuario': 'zapateria',
      'otros': {
        'talla': ['21', '22', '23', '24', '25','26', '27'],
        'color': [ 
          {'nombre':'Ibiza Rey', 'image': [
            'https://http2.mlstatic.com/D_NQ_NP_655645-MLM30752881573_052019-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_974537-MLM31158969083_062019-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_656863-MLM31158974041_062019-O.webp'
          ], 'codigo': 'blue'}, 
          {'nombre':'Negro', 'image': [
            'https://http2.mlstatic.com/D_NQ_NP_651031-MLM31158969138_062019-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_873502-MLM31158985018_062019-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_749667-MLM31158958235_062019-O.webp'
          ], 'codigo': 'black'},
          {'nombre':'Rojo', 'image': [
            'https://http2.mlstatic.com/D_NQ_NP_752670-MLM31158957295_062019-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_846261-MLM31158980590_062019-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_661399-MLM31158965717_062019-O.webp'
          ], 'codigo': 'red'},
        ],
      },
    },
    {
      'clave_producto': '2204',
      'nombre': "Zapato Piel Borrego Alto 6 Cm. Confort Manet 2104 Cof 178789",
      'precio': '600.00',
      'familia_prod': '05',
      'descripcion':'',
      'imagen':
          'https://http2.mlstatic.com/D_NQ_NP_829784-MLM32007298681_082019-O.webp',
      'marca': 'GENÉRICO',
      'usuario': 'zapateria',
      'otros': {
        'talla': [ '22', '23', '24', '25']
      },
    },
    {
      'clave_producto': '2205',
      'nombre': "Armada Botas Industriales Seguridad Trabajo Casquillo 101",
      'precio': '529',
      'familia_prod': '02',
      'descripcion':'',
      'imagen':
          'https://http2.mlstatic.com/D_NQ_NP_966338-MLM41250310351_032020-O.webp',
      'marca': 'GENÉRICO',
      'usuario': 'zapateria',
      'otros': {
        'talla': [ '22', '23', '24', '25']
      },
    },
    {
      'clave_producto': '2206',
      'nombre': "Armada Botas Industriales Seguridad Trabajo Casquillo 150",
      'precio': '529',
      'familia_prod': '02',
      'descripcion':'',
      'imagen':
          'https://http2.mlstatic.com/D_NQ_NP_717294-MLM41250271160_032020-O.webp',
      'marca': 'GENÉRICO',
      'usuario': 'zapateria',
      'otros': {
        'talla': ['26', '27', '28', '29']
      },
    },
    {
      'clave_producto': '2207',
      'nombre': "Zapato Tenis Para Dama Deportes Color Rosa Claro",
      'precio': '359',
      'familia_prod': '01',
      'descripcion':'',
      'imagen':
          'https://http2.mlstatic.com/D_NQ_NP_609115-MLM40947440107_022020-O.webp',
      'marca': 'GENÉRICO',
      'usuario': 'zapateria',
      'otros': {
        'talla': ['21', '22', '23', '24', '25'],
        'color': [ 
          {'nombre':'Negro', 'image': [
            'https://http2.mlstatic.com/D_NQ_NP_609115-MLM40947440107_022020-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_691105-MLM40947440106_022020-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_683860-MLM40947424342_022020-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_857935-MLM40947387946_022020-O.webp',
          ], 'codigo': 'black'}, 
          {'nombre':'Rosa', 'image': [
            'https://http2.mlstatic.com/D_NQ_NP_666984-MLM31239002325_062019-O.webp',
            'https://http2.mlstatic.com/D_Q_NP_831102-MLM31239002122_062019-R.webp',
            'https://http2.mlstatic.com/D_NQ_NP_877207-MLM31238995109_062019-O.webp'
          ], 'codigo': 'pink'},
        ],
      },
    },
    {
      'clave_producto': '2208',
      'nombre': "Zapatos Casuales Para Dama Stylo 135 Beige",
      'precio': '237',
      'familia_prod': '05',
      'descripcion':'',
      'imagen':
          'https://http2.mlstatic.com/D_NQ_NP_745714-MLM32895411880_112019-O.webp',
      'marca': 'GENÉRICO',
      'usuario': 'zapateria',
      'otros': {
        'talla': [ '22', '23', '24', '25']
      },
    },
    {
      'clave_producto': '2500',
      'nombre': "Pollo Asado",
      'precio': '',
      'familia_prod': '05',
      'descripcion':'',
      'imagen':
          'https://scontent.faca1-1.fna.fbcdn.net/v/t1.0-9/91164060_1426444164200476_1223471298835906560_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEukEFETPKW2_0hcjmVO-s3thU171KCKI22FTXvUoIojZRszGe9_291nvaTQddmX_ZG5WHcGfkrozjLswuUIxwH&_nc_ohc=NoDw2N8iki0AX-8r2Lz&_nc_ht=scontent.faca1-1.fna&oh=dc6ec8c893f09c97b5f0bb12499afb3c&oe=5FD57050',
      'marca': 'GENÉRICO',
      'usuario': 'pollo',
    },
    {
      'clave_producto': '2501',
      'nombre': "Tacos Dorados",
      'precio': '',
      'familia_prod': '',
      'descripcion':'',
      'imagen':
          'https://scontent.faca1-1.fna.fbcdn.net/v/t1.0-9/90047187_1418043161707243_2696711477263335424_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeGkRcjpi_tSSQCgEUQm2iUIn_YkJhppdc-f9iQmGml1z-X-VYC1uUdt_2PxUfg-niGaYTEA6Cn7Fkj2WFbiF-04&_nc_ohc=EkSytjGA5TkAX9FVxcY&_nc_ht=scontent.faca1-1.fna&oh=e640430475498e670f43a59dca6c83a9&oe=5FD52287',
      'marca': 'GENÉRICO',
      'usuario': 'pollo',
    },
    {
      'clave_producto': '2502',
      'nombre': "Flautas De Res",
      'precio': '',
      'familia_prod': '',
      'descripcion':'',
      'imagen':
          'https://scontent.faca1-1.fna.fbcdn.net/v/t1.0-9/89552686_1414727758705450_6135615692939984896_n.jpg?_nc_cat=108&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeFJaT2l7H0E2QvXRBOTCsRA1PMcLMpyUCTU8xwsynJQJOj0VzEZRWQDbIcHvOZRKcSdqthoLo9FEs8eBZGBHs8K&_nc_ohc=Q1fGUU5LTRkAX8qaaOJ&_nc_ht=scontent.faca1-1.fna&oh=c14dc3d5d51271046f1258e4b6e9dad7&oe=5FD76AB9',
      'marca': 'GENÉRICO',
      'usuario': 'pollo',
    },
    {
      'clave_producto': '2503',
      'nombre': "Brocheta",
      'precio': '',
      'familia_prod': '',
      'descripcion':'',
      'imagen':
          'https://scontent.faca1-1.fna.fbcdn.net/v/t1.0-9/90211301_1415678458610380_8897964501098299392_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeF2xqCLQpwhHC921i0qC_BeoX9jlGSnT3ehf2OUZKdPd-T5D9yBabTXMi82UNrqc9qhDTZDbU5K01Z0TLuhbrTf&_nc_ohc=RsN2f0L5ZO8AX-GLHBJ&_nc_ht=scontent.faca1-1.fna&oh=3312525a56dbef9213199a17fc5e2dc6&oe=5FD4C194',
      'marca': 'GENÉRICO',
      'usuario': 'pollo',
    },
    {
      'clave_producto': '2503',
      'nombre': "Brocheta",
      'precio': '',
      'familia_prod': '',
      'descripcion':'',
      'imagen':
          'https://images.rappi.com.mx/products/978575347-1599500249385.jpg?d=128x90&e=webp',
      'marca': 'GENÉRICO',
      'usuario': 'pollo',
    },
    {
      'clave_producto': '2600',
      'nombre': "Guacamole",
      'precio': '72',
      'familia_prod': '91',
      'descripcion':' Guacamole 150gr. Acompañado de totops y chicharrón.',
      'imagen':
          'https://images.rappi.com.mx/products/978575073-1599500436220.jpg?d=128x90&e=webp',
      'marca': 'GENÉRICO',
      'usuario': 'tarascos',
    },
    {
      'clave_producto': '2601',
      'nombre': "Consomé de Pollo",
      'precio': '88',
      'familia_prod': '92',
      'descripcion':'Consomé , acompañado de arroz blanco, pollo deshebrado y garbanzos ',
      'imagen':
          'https://images.rappi.com.mx/products/978575107-1599500436483.jpg?d=128x90&e=webp',
      'marca': 'GENÉRICO',
      'usuario': 'tarascos',
    },
    {
      'clave_producto': '2602',
      'nombre': "Frijoles Charros",
      'precio': '72',
      'familia_prod': '92',
      'descripcion':' Guacamole 150gr. Acompañado de totops y chicharrón.',
      'imagen':
          'https://images.rappi.com.mx/products/978575147-1599500442526.jpg?d=128x90&e=webp',
      'marca': 'GENÉRICO',
      'usuario': 'tarascos',
    },
    {
      'clave_producto': '2603',
      'nombre': "Pastor para Taquear",
      'precio': '120',
      'familia_prod': '93',
      'descripcion':'Pastor del trompo 200 gr, acompañado de 7 tortillas, cilantro, cebolla y piña.',
      'imagen':
          'https://images.rappi.com.mx/products/978575347-1599500249385.jpg?d=128x90&e=webp',
      'marca': 'GENÉRICO',
      'usuario': 'tarascos',
    },
    {
      'clave_producto': '2604',
      'nombre': "Taco Rey",
      'precio': '110',
      'familia_prod': '93',
      'descripcion':'Tortilla de harina con base de queso gratinado con pastor, bañado en nustra salsa Reina con cilantro, cebolla y piña (150gr) ',
      'imagen':
          'https://images.rappi.com.mx/products/978575350-1599500249432.jpg?d=128x90&e=webp',
      'marca': 'GENÉRICO',
      'usuario': 'tarascos',
    },
    {
      'clave_producto': '2605',
      'nombre': "Costrita Premium",
      'precio': '110',
      'familia_prod': '93',
      'descripcion':'Crujiente tortilla de queso con tu especialidad premium favorita (100gr)',
      'imagen':
          'https://images.rappi.com.mx/products/978575484-1599775975374.jpg?d=128x90&e=webp',
      'marca': 'GENÉRICO',
      'usuario': 'tarascos',
    },
    {
      'clave_producto': '2606',
      'nombre': "Torta Tradicional de Pastor",
      'precio': '130',
      'familia_prod': '94',
      'descripcion':'Torta de pastor con queso gratinado en telera jumbo, acompañada con frijoles, aguacate, jitomate, cebolla y encurtidos, 350 gr. ',
      'imagen':
          'https://images.rappi.com.mx/products/978575970-1599501311402.jpg?d=128x90&e=webp',
      'marca': 'GENÉRICO',
      'usuario': 'tarascos',
    },
    {
      'clave_producto': '2606',
      'nombre': "Torta de Arrachera con Queso",
      'precio': '130',
      'familia_prod': '94',
      'descripcion':'Torta con arrachera 150 gr y queso gratinado, en telera jumbo, acompañadas de frijoles, aguacate, jitomate, cebolla y encurtidos, 350 gr. ',
      'imagen':
          'https://images.rappi.com.mx/products/978576298-1599501088368.jpg?d=128x90&e=webp',
      'marca': 'GENÉRICO',
      'usuario': 'tarascos',
    },
    
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
       'http://kingo.com.mx/wp-content/uploads/2020/11/1-Slider.jpg',
       'http://kingo.com.mx/wp-content/uploads/2020/11/3-Slider.jpg',
       'http://kingo.com.mx/wp-content/uploads/2020/11/4-Slider.jpg',
       'http://kingo.com.mx/wp-content/uploads/2020/11/5-Slider.jpg',
       'http://kingo.com.mx/wp-content/uploads/2020/11/6-Slider-ROCA.jpg'
     ]
    },
    {'usuario':'materialestellez',
    'carousel': [
       'http://kingo.com.mx/wp-content/uploads/2020/11/3-Tellez-Roble.jpg',
       'http://kingo.com.mx/wp-content/uploads/2020/11/1-Tellez-Roble.jpg',
       'http://www.vibromex.com.mx/img/banners/BANNER-CEMENTO2-1200X340-PX.jpg',
     ]
    },
    {'usuario':'tienda',
    'carousel': [
       'https://firebasestorage.googleapis.com/v0/b/database-app-1964b.appspot.com/o/1%20Banner%20Factura%20Electronica.jpg?alt=media&token=bab7b014-e336-401a-9383-dafdf0cc6e75',
       'https://firebasestorage.googleapis.com/v0/b/database-app-1964b.appspot.com/o/2%20Clases%20en%20Linea.jpg?alt=media&token=2d9f7c2c-6a69-4095-9d3a-2e9ef15c1cfc',
       'https://firebasestorage.googleapis.com/v0/b/database-app-1964b.appspot.com/o/3%20Clases%20en%20Linea.jpg?alt=media&token=9193dd57-02bb-4129-a244-6b6e95d21140'
     ]
    },
  ];

  sucursales = [
    {'usuario': 'gruporoca', 
     'sucursales' : [
      'Acapulco - La Sabana', 'Tierra Colorada', 'Petaquillas'
      ]
    },
    {'usuario': 'applebees',
     'sucursales': [
       "Applebee's Acapulco", "Applebee's Vía Vallejo", "Applebee’s Plaza Carso", "Applebee´s Galerías Saltillo",
     ]
    }
  ];

  private carrito$ = new Subject<any[]>();
  private carrito = [];


  private arrayProductos$ = new Subject<ProductoModel[]>();
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

  removerProducto(producto: string){
    this.carrito = JSON.parse(localStorage.getItem('carrito'));

    let index = this.carrito.findIndex( element => element.claveProducto === producto);
    this.carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    this.carrito$.next(this.carrito);
  }

  modificarCarrito(producto: string, cantidad: number){
    this.carrito = JSON.parse(localStorage.getItem('carrito'));
    this.carrito.forEach(element => {
      if(element.claveProducto === producto){
        element.cantidad = cantidad;
        return true;
      }
    });
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    this.carrito$.next(this.carrito);
  }
  

  cargarCarrito(){
    let productosCarrito = localStorage.getItem('carrito');
    if(productosCarrito) {
      this.carrito = JSON.parse(productosCarrito);
      this.carrito$.next(this.carrito);
      return this.carrito;
    }else
      return [];
  }

  getCarrito$(): Observable<any []>{
    return this.carrito$.asObservable();
  }

  getProductos$(): Observable <ProductoModel[]>{
    return this.arrayProductos$.asObservable();
  }

  

  
///Datos simulados--------
  constructor() { 
    this.productos.forEach( (producto) => {
      let obj: ProductoModel = new ProductoModel();
      obj.nombre = producto.nombre;
      obj.imagen = producto.imagen;
      obj.precio = parseFloat(producto.precio);
      obj.claveProducto = producto.clave_producto;
      obj.familiaProducto = producto.familia_prod;
      obj.usuario = producto.usuario;
      obj.otros = producto.otros;
      this.arrayProductos.push(obj);
    } );
  }

  getProductos(usuario: string){
    if(usuario === 'materialestellez')
      usuario = 'gruporoca';
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
      obj.otros = res.otros;
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

  buscarProductoPorNombre(nombre: string){
    let productoNombre: ProductoModel [] = []
    this.arrayProductos.forEach( (producto: ProductoModel) => {
      if(producto.nombre.toLowerCase().includes(nombre.toLowerCase())){
        productoNombre.push(producto);
      }
    });
    this.arrayProductos$.next(productoNombre);
  }

  getCategorias(usuario: string): any{
    if(usuario === 'materialestellez' || usuario === 'autopistadelsol')
      usuario = 'gruporoca';
    return this.categorias.find( (element) =>  element.usuario == usuario);
  }

  getCarousel(usuario: string):  any{
    if( usuario === 'autopistadelsol')
      usuario = 'gruporoca';
    return this.carousel.find( (element) =>  element.usuario == usuario);
  }

  getSucursales(usuario: string): any{
    return this.sucursales.find( (element)=>  element.usuario == usuario);
  }
}
