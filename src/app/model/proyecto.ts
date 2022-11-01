export class Proyecto {
    id?: number;
    nombre: string;
    urlImagen: string;
    descripcion: string;
    urlProyecto: string;
    fechaRealizacion: string;

    constructor(nombre: string,
                urlImagen: string,
                descripcion: string,
                urlProyecto: string,
                fechaRealizacion: string){
        this.nombre = nombre;
        this.urlImagen = urlImagen;
        this.descripcion = descripcion;
        this.urlProyecto = urlProyecto;
        this.fechaRealizacion = fechaRealizacion;
    }
}
