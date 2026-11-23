/**
 * Un videojuego de la biblioteca.
 */

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

    /**
     * Comprueba si un videojuego es bueno dependiendo de su puntuación.
     * @param {number} puntuacionLimite - Puntuación mínima para considerar bueno un videojuego.
     * @returns {boolean} true si alcanza el límite, false en caso contrario.
     */
    esBueno(puntuacionLimite) {
        if (this.Puntuacion >= puntuacionLimite) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Obtiene una descripción del videojuego.
     * @returns {string} Desarrollador, género y puntuación del videojuego.
     */
    descripcion() {
        return `${this.Desarrollador} - ${this.Genero} - ${this.Puntuacion}`;
    }

}