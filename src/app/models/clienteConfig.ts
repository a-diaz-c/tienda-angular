export class ConfigCliente{
    id: string;
    nombre: string;
    colorMenu: string;
    colorHeader: string;
    icono: string;
    carousel: boolean;

    constructor(){
        this.id = "";
        this.nombre = "";
        this.colorHeader = "";
        this.colorMenu = "";
        this.icono = "";
        this.carousel = true;
    }
    
}