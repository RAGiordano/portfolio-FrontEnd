export class persona {
    id?: number;//Coloco el signo "?" para indicar que el dato no es requerido (porque se va a autogenerar)
    dni: String;
    nombre: String;
    apellido: String;
    domicilio: String;
    fecha_nac: String;//Después tengo que cambiar a tipo fecha (DATE)
    lugar_nac: String;
    telefono: String;
    presentacion: String;
    sobre_mi: String;
    contraseña: String;
    tipo_usuario: String;//Después ver si lo cambio a número o booleano
    objetivo: String;
    email: String;
    url_foto: String;
    url_banner: String;//Después tengo que cambiarlo por un id. Almacenar los banners aparte.

    constructor(dni: String,
                nombre: String,
                apellido: String,
                domicilio: String,
                fecha_nac: String,
                lugar_nac: String,
                telefono: String,
                presentacion: String,
                sobre_mi: String,
                contraseña: String,
                tipo_usuario: String,
                objetivo: String,
                email: String,
                url_foto: String,
                url_banner: String) {
                    this.dni = dni;
                    this.nombre = nombre;
                    this.apellido = apellido;
                    this.domicilio = domicilio;
                    this.fecha_nac = fecha_nac;
                    this.lugar_nac = lugar_nac;
                    this.telefono = telefono;
                    this.presentacion = presentacion;
                    this.sobre_mi = sobre_mi;
                    this.contraseña = contraseña;
                    this.tipo_usuario = tipo_usuario;
                    this.objetivo = objetivo;
                    this.email = email;
                    this.url_foto = url_foto;
                    this.url_banner = url_banner;
                }
    
}