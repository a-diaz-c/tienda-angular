import { ConfigCliente } from '../models/clienteConfig';
import { ConfiguracionService } from '../services/configuracion.service';

export class GlobalConfig {

    private static instance: GlobalConfig;
    private configService: ConfiguracionService = new ConfiguracionService();
    private usuario: string;

    private confingClient: ConfigCliente;
    private constructor(url: string) {
        console.log(url);
        this.usuario = 'gruporoca';
        this.confingClient = this.configService.getCliente('gruporoca');
    }

    public static getInstance(): GlobalConfig {
        let ruta = location.href.split('/');
        if (!GlobalConfig.instance) {
            GlobalConfig.instance = new GlobalConfig(ruta[3]);
        }

        return GlobalConfig.instance;
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