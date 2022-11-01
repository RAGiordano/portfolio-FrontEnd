export class Persona {
    id?: number;//Signo "?" para indicar que el dato no es requerido (porque se va a autogenerar)
    dni: String;
    nombre: String;
    apellido: String;
    fechaNac: String;
    lugarNac: String;
    telefono: String;
    presentacion: String;
    sobreMi: String;
    email: String;
    urlFoto: String;
    urlBanner: String;

    constructor(dni: String,
                nombre: String,
                apellido: String,
                fechaNac: String,
                lugarNac: String,
                telefono: String,
                presentacion: String,
                sobreMi: String,
                email: String,
                urlFoto: String,
                urlBanner: String) {
                    this.dni = dni;
                    this.nombre = nombre;
                    this.apellido = apellido;
                    this.fechaNac = fechaNac;
                    this.lugarNac = lugarNac;
                    this.telefono = telefono;
                    this.presentacion = presentacion;
                    this.sobreMi = sobreMi;
                    this.email = email;
                    this.urlFoto = urlFoto;
                    this.urlBanner = urlBanner;
                }
    
}