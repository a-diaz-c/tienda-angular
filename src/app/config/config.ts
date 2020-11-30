import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigCliente } from '../models/clienteConfig';
import { ConfiguracionService } from '../services/configuracion.service';

@Injectable({
    providedIn: 'root'
  })
export class GlobalConfig {

    private static instance: GlobalConfig;
    private usuario: string;
    private contador: number = 1;

    private confingClient: ConfigCliente;
    private constructor(private configService: ConfiguracionService ) {
        let ruta = location.href.split('/');
        console.log(ruta[3]);
        this.usuario = ruta[3];
        this.confingClient = this.configService.getCliente(ruta[3]);
    }

/*     public static getInstance(): GlobalConfig {
        let ruta = location.href.split('/');
        if (!GlobalConfig.instance) {
            GlobalConfig.instance = new GlobalConfig(ruta[3]);
        }

        return GlobalConfig.instance;
    } */

    public sumar(){
        this.contador++;
        return this.contador;
    }

    public getId(){
        return this.confingClient.id;
    }

    public getNombre(){
        return this.confingClient.nombre;
    }

    public getColorMenu(){
        return this.confingClient.colorMenu;
    }

    public getcolorHeader(){
        return this.confingClient.colorHeader;
    }

    public getIcono(){
        return this.confingClient.icono;
    }

    public getUsuario(){
        return this.usuario;
    }

    public getCarousel(){
        return this.confingClient.carousel;
    }

    public sucursales(){
        return this.confingClient.sucursales;
    }


}