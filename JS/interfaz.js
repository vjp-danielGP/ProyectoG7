import { datosVideojuegos } from "./datos.js";
import { añadir, ordenar, buscarPorTexto, estadisticas, fechaLegible, diasDesde } from "./logica.js";
import { Videojuego } from "./videojuego.js";

const videojuegos = [];

for (const datos of datosVideojuegos) {
  videojuegos.push(new Videojuego(datos));
}
const DIAS_RECIENTE = 2190; // 6 años
const puntuacionBueno = 97;

let textoBuscado = "";
let criterio = "ninguno";

// ========================= SPRINT 1 =========================

// Reto 2

const listado = document.querySelector("#listado");

let totalJuegos = 0;

function crearTarjeta(juego) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  const titulo = document.createElement("h3");
  titulo.textContent = juego.Titulo;

  const datos = document.createElement("p");
  datos.textContent = juego.descripcion();//`${juego.Desarrollador} - ${juego.Genero} - ${juego.Puntuacion}`;

  const fecha = document.createElement("p");
  fecha.classList.add("fecha");
  fecha.textContent = fechaLegible(juego.Año);
  if (diasDesde(juego.Año) <= DIAS_RECIENTE) {
    tarjeta.classList.add("reciente");
  }

  if (juego.esBueno(puntuacionBueno)) {
    tarjeta.classList.add("bueno");
  }

  tarjeta.append(titulo, datos, fecha);

  return tarjeta;
}

const resumen = document.querySelector("#resumen");

function pintar(lista) {
  listado.replaceChildren();
  totalJuegos = 0;
  for (const juego of lista) {
    listado.append(crearTarjeta(juego));
    totalJuegos++;
  }

  if (lista.length > 0) {
    resumen.textContent = `Mostrando ${totalJuegos} de ${videojuegos.length} videojuegos`;
  } else {
    resumen.textContent = `No hay videojuegos que contengan ${buscador.value}`;
  }

}

const pEstadisticas = document.querySelector("#estadisticas");

function pintarEstadisticas(lista) {
  let stats = estadisticas(lista);

  if (stats === null) {
    pEstadisticas.textContent = "No hay datos";
    return;
  } else {
    pEstadisticas.textContent = `${stats.total} de puntos totales - ${stats.media} de puntuación media - Máxima Puntuación: ${stats.maximo.Puntuacion}`;
  }
}

pintarEstadisticas(videojuegos);

function actualizar() {
  const encontrados = buscarPorTexto(videojuegos, textoBuscado);
  const ordenados = ordenar(encontrados, criterio);
  pintarEstadisticas(ordenados);
  pintar(ordenados);
}

let buscador = document.querySelector("#buscador");
let ordenPuntuacion = document.querySelector("#ordenPuntuacion");
let ordenNombre = document.querySelector("#ordenNombre");
let ordenFecha = document.querySelector("#ordenFecha");

buscador.addEventListener("input", () => {
  textoBuscado = buscador.value;
  actualizar();
});

ordenNombre.addEventListener("click", () => {
  elegirOrden("nombre")
});

ordenPuntuacion.addEventListener("click", () => {
  elegirOrden("puntuacion")
});

ordenFecha.addEventListener("click", () => {
  elegirOrden("fecha")
})

// Retos sesión 12
// Parte A - Reto 1
// A1 - Guardar y leer una cookie

function guardarCookie(nombre, valor, dias) {
  const segundos = dias * 24 * 60 * 60;
  const texto = encodeURIComponent(valor);
  document.cookie = `${nombre}=${texto}; max-age=${segundos}; path=/`;
}

function leerCookie(nombre) {
  const partes = document.cookie.split("; ");
  for (const parte of partes) {
    const [clave, valor] = parte.split("=");
    if (clave === nombre) {
      return decodeURIComponent(valor);
    }
  }
  return null;
}

// A2 - Guardar el orden al pulsar un botón
function elegirOrden(nuevo) {
  criterio = nuevo;
  guardarCookie("orden", criterio, 30);
  actualizar();
}

// A3 - Aplicar orden al cargar

criterio = leerCookie("orden") ?? "ninguno";
actualizar();

// D - Campo validado con expresión regular
const PATRON_TITULO = /^.{2,40}$/;

const formulario = document.querySelector("#anadir");

const campo = document.querySelector("#campo")

formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que la página recargue
  const titulo = campo.value.trim();

  if (!PATRON_TITULO.test(titulo)) {
    alert("Entre 2 y 40 letras");
    return;
  }

  añadir(videojuegos, {
    Titulo: titulo,
    Desarrollador: "Desconocido",
    Año: new Date().toISOString().slice(0, 10),
    Genero: "Desconocido",
    Puntuacion: 0,
    Estado: "Pendiente",
  });

  actualizar();

});