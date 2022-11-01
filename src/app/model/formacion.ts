export class Formacion {
    id?: number;
    titulo: string;
    urlLogo: string;
    institucion: string;
    fechaDesde: string;
    fechaHasta: string;
    descripcion: string;

    constructor(titulo: string,
                urlLogo: string,
                institucion: string,
                fechaDesde: string,
                fechaHasta: string,
                descripcion: string){
        this.titulo = titulo;
        this.urlLogo = urlLogo;
        this.institucion = institucion;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
        this.descripcion = descripcion;
    }
}
