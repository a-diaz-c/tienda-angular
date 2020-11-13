export class ProductoModel{
    claveProducto: string;
    nombre: string;
    precio: number;
    familiaProducto: string;
    imagen: string;
    descripcion: string;
    usuario: string;
    otros: any

    constructor(){
        this.claveProducto = "";
        this.nombre = "";
        this.precio = 0.0;
        this.familiaProducto = "";
        this.imagen = "";
        this.descripcion = "";
        this.usuario = "";
    }
    
}