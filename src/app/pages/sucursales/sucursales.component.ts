import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  lat = 22.199957;
  lng = -101.487698;
  
  marcadores: any[] = [
    { lat: '16.871539', lng: '-99.813786', nombre: "Acapulco - La Sabana", direccion: 'Lázaro Cárdenas, Ruffo Figueroa, La Sabana, 39799 Acapulco de Juárez, Gro.'},
    { lat: '17.167920', lng: '-99.534427', nombre: "Tierra Colorada", direccion: ''},
    { lat: '17.494015', lng: '-99.464983', nombre: "Petaquillas", direccion: ''},
/*     { lat: '16.860217', lng: '-99.873522', nombre: "Applebee's Acapulco", direccion: 'Villas del Lago, 62374 Cuernavaca, Mor. Cuernavaca. C.P. 62500' },
    { lat: '19.487504', lng: '-99.153238', nombre: "Applebee's Vía Vallejo", direccion: 'Calzada Vallejo, No. 1090, Colonia Santa Cruz de las Salinas, Delegación Azcapotzalco, Ciudad de México, D.F.' },
    { lat: '19.442545', lng: '-99.204091', nombre: "Applebee’s Plaza Carso", direccion: 'Plaza Carso, Piso 3 Local R02, Col. Granada, C.P. 11529 Ciudad de México, CDMX.' },
    { lat: '25.457571', lng: '-100.979277', nombre: "Applebee´s Galerías Saltillo", direccion: 'Blvd. Nazario S. Ortiz Garza #2345 L-312, Col. Tanque de Peña. Ciudad: Saltillo, Coahuila. CP: 25279 Tel. (844) 485-0596' }, */

  ]

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    this.locationService.getPosition().then(pos => {
        this.lat = pos.lat;
        this.lng = pos.lng;
        console.log(this.lat  + " - " +  this.lng);
    });
  }

}
