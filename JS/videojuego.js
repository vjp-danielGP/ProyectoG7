export class Videojuego {
    constructor(datos) {
        this.Id = datos.Id;
        this.Titulo = datos.Titulo;
        this.Desarrollador = datos.Desarrollador;
        this.Año = datos.Año;
        this.Genero = datos.Genero;
        this.Puntuacion = datos.Puntuacion;
        this.Estado = datos.Estado;
    }
    get Puntuacion() { return this._Puntuacion }
    set Puntuacion(valor) {
        if (typeof valor !== "number" || valor < 0 || valor > 100) {
            throw new Error(`Puntuación no válida: ${valor}`)
        }
        this._Puntuacion = valor;
    }

    esBueno(puntuacionLimite) {
        if (this.Puntuacion >= puntuacionLimite) {
            return true;
        } else {
            return false;
        }
    }

    descripcion() {
        return `${this.Desarrollador} - ${this.Genero} - ${this.Puntuacion}`;
    }

}