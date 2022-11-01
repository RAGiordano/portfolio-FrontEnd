export class Experiencia {
    id?: number;
    nombreEmpresa: string;
    urlLogo: string;
    puesto: string;
    descripcion: string;
    fechaDesde: string;
    fechaHasta: string;

    constructor(nombreEmpresa: string,
                urlLogo: string,
                puesto: string,
                descripcion: string,
                fechaDesde: string,
                fechaHasta: string){
        this.nombreEmpresa = nombreEmpresa;
        this.urlLogo = urlLogo;
        this.puesto = puesto;
        this.descripcion = descripcion;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
    }
}
