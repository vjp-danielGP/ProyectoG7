import { Videojuego } from "./videojuego.js";
import { buscarPorTexto, añadir } from "./logica.js";

/**
 * Biblioteca de videojuegos.
 */
export class Biblioteca {
    constructor(videojuegos) {
        this._videojuegos = videojuegos;
    }

    get total() { return this._videojuegos.length; }

    /**
     * Lista los juegos de una biblioteca.
     * @returns {Videojuego[]} Un array de videojuegos.
     */
    listar() { return [...this._videojuegos]; }

    /**
     * Añade un videojuego a la biblioteca.
     * @param {Videojuego} videojuego - El videojuego que se desea añadir a la biblioteca.
     * @returns {number} Id del videojuego añadido.
     */
    añadir(videojuego) { return añadir(this._videojuegos, videojuego); }

    /**
     * Busca los videojuegos cuyo nombre contienen un texto, sin distinguir mayúsculas.
     * @param {string} texto - Lo que se busca
     * @returns {Videojuego[]} Los videojuegos que lo contienen.
     */
    buscar(texto) { return buscarPorTexto(this._videojuegos, texto); }

    /**
     * Elimina un videojuego con un id existente.
     * @param {number} id - Identificador del videojuego que se desea eliminar.
     * @returns {boolean} true si se elimina correctamente, false en caso contrario.
     */
    eliminar(id) { 
        for (let i = 0; i < this._videojuegos.length; i++) {
            if (this._videojuegos[i].Id === id) {
                this._videojuegos.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    /**
     * Crea una biblioteca desde los datos proporcionados.
     * @param {Object[]} datos - Array de objetos con los datos de los videojuegos.
     * @returns {Biblioteca} Biblioteca los videojuegos creados.
     */
    static desdeDatos(datos) {
        const videojuegos = [];

        for (const d of datos) {
            videojuegos.push(new Videojuego(d));
        }

        return new Biblioteca(videojuegos);
    }
}