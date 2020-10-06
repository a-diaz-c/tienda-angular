export class ProductoModel{
    claveProducto: String;
    nombre: String;
    precio: number;
    familiaProducto: String;
    imagen: String;
    descripcion: String;

    constructor(){
        this.claveProducto = "";
        this.nombre = "";
        this.precio = 0.0;
        this.familiaProducto = "";
        this.imagen = "";
        this.descripcion = "";
    }
    
}