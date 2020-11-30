export class ProductoModel{
    claveProducto: string;
    nombre: string;
    precio: number;
    familiaProducto: string;
    image: string [];
    descripcion: string;
    video: string [];
    usuario: string;
    otros: any

    constructor(){
        this.claveProducto = "";
        this.nombre = "";
        this.precio = 0.0;
        this.familiaProducto = "";
        this.image = [];
        this.descripcion = "";
        this.video = [];
        this.usuario = "";
    }
    
}