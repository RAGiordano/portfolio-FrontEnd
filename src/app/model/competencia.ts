
export class Competencia {
    id?: number;
    nombre: string;
    descripcion: string;
    urlLogo: string;
    porcentaje: number;

    constructor(nombre: string, descripcion: string, urlLogo: string, porcentaje: number){
        this.nombre = nombre;
        this.descripcion=descripcion;
        this.urlLogo = urlLogo;
        this.porcentaje = porcentaje;
    }

}
