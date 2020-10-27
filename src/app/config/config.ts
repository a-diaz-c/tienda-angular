import { ConfigCliente } from '../models/clienteConfig';
import { ConfiguracionService } from '../services/configuracion.service';

export class GlobalConfig {

    private static instance: GlobalConfig;
    private configService: ConfiguracionService = new ConfiguracionService();

    private confingClient: ConfigCliente;
    private constructor() { 
        this.confingClient = this.configService.getCliente("2");
    }

    public static getInstance(): GlobalConfig {
        if (!GlobalConfig.instance) {
            GlobalConfig.instance = new GlobalConfig();
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


}