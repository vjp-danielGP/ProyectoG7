const NOMBRE_APP = "BiblioGame";

const VIDEOJUEGOS = [
  {
    Id: 1,
    Titulo: "Resident Evil 2",
    Desarrollador: "Capcom",
    Año: "2019-01-25",
    Genero: "Terror y supervivencia",
    Puntuacion: 91,
    Estado: "Finalizado",
  },
  {
    Id: 2,
    Titulo: "Elden Ring",
    Desarrollador: "FromSoftware",
    Año: "2022-02-25",
    Genero: "Soulslike",
    Puntuacion: 96,
    Estado: "Pendiente",
  },
  {
    Id: 3,
    Titulo: "The Legend of Zelda: Breath of the Wild",
    Desarrollador: "Nintendo",
    Año: "2017-03-03",
    Genero: "Aventura",
    Puntuacion: 97,
    Estado: "Pendiente",
  },
  {
    Id: 4,
    Titulo: "Red Dead Redemption 2",
    Desarrollador: "Rockstar Games",
    Año: "2018-10-26",
    Genero: "Aventura",
    Puntuacion: 97,
    Estado: "Jugando",
  },
  {
    Id: 5,
    Titulo: "Tekken 3",
    Desarrollador: "Namco",
    Año: "1998-04-29",
    Genero: "Lucha",
    Puntuacion: 96,
    Estado: "Finalizado",
  },
  {
    Id: 6,
    Titulo: "Metroid Prime",
    Desarrollador: "Retro Studios",
    Año: "2002-11-17",
    Genero: "Acción",
    Puntuacion: 97,
    Estado: "Pendiente",
  },
  {
    Id: 7,
    Titulo: "Half-Life 2",
    Desarrollador: "Valve Software",
    Año: "2004-11-16",
    Genero: "Terror y supervivencia",
    Puntuacion: 96,
    Estado: "Pendiente",
  },
  {
    Id: 8,
    Titulo: "BioShock",
    Desarrollador: "Irrational Games",
    Año: "2007-08-21",
    Genero: "Terror y disparos",
    Puntuacion: 96,
    Estado: "Jugando",
  },
  {
    Id: 9,
    Titulo: "Super Mario Galaxy 2",
    Desarrollador: "Nintendo",
    Año: "2010-05-23",
    Genero: "Plataformas",
    Puntuacion: 98,
    Estado: "Finalizado",
  },
  {
    Id: 10,
    Titulo: "Gran Turismo",
    Desarrollador: "Polyphony Digital",
    Año: "1998-05-12",
    Genero: "Carreras",
    Puntuacion: 96,
    Estado: "Finalizado",
  },
];

const DIAS_RECIENTE = 2190; // 6 años

//LISTADO 1
function listarTodos(listaJuegos) {
  const DEV = "Nintendo";

  console.log("---TODOS LOS JUEGOS---");
  for (const juego of listaJuegos) {
    const plataforma =
      juego.Desarrollador === DEV ? "Exclusivo" : "Multiplataforma";
    console.log(`${juego.Titulo} - ${plataforma}`);
  }
}

//LISTADO 2
function filtrar(listaJuegos, estado, puntuacion) {
  let encontrados = 0;

  console.log("---FINALIZADOS Y BUENOS---");
  for (let i = 0; i < listaJuegos.length; i++) {
    const juego = listaJuegos[i];
    if (juego.Estado === estado && juego.Puntuacion >= puntuacion) {
      console.log(`${juego.Titulo} - ${juego.Puntuacion}`);
      encontrados++;
    }
  }

  return encontrados;
}

//LISTADO 3
function contarPorEstado(listaJuegos) {
  let pendientes = 0;
  let jugando = 0;
  let finalizados = 0;

  for (const juego of listaJuegos) {
    switch (juego.Estado) {
      case "Pendiente":
        pendientes++;
        break;
      case "Finalizado":
        finalizados++;
        break;
      case "Jugando":
        jugando++;
        break;
      default:
        break;
    }
  }

  console.log(`Pendientes: ${pendientes}, Finalizados: ${finalizados}, Jugando: ${jugando}`);
}

console.log(`${NOMBRE_APP}: ${VIDEOJUEGOS.length} juegos cargados`);
console.table(VIDEOJUEGOS);

//Llamada a Listar Todos
listarTodos(VIDEOJUEGOS);

//Llamada a filtrar
console.log(`${filtrar(VIDEOJUEGOS, "Finalizado", 95)} de ${VIDEOJUEGOS.length} cumplen la condición`);
console.log(`${filtrar(VIDEOJUEGOS, "Jugando", 90)} de ${VIDEOJUEGOS.length} cumplen la condición`);

//Llamada a contar
contarPorEstado(VIDEOJUEGOS);

// Reto 2
// Función listar
function listar(lista) {
  for (const juego of lista) {
    console.log(`${juego.Id} - ${juego.Titulo} - ${juego.Desarrollador} - ${juego.Año} - ${juego.Genero} - ${juego.Puntuacion} - ${juego.Estado}`);
  }
}

listar(VIDEOJUEGOS);

// Función buscarPorTexto
function buscarPorTexto(lista, texto) {
  const buscado = texto.toLowerCase();
  const resultado = [];

  for (const juego of lista) {
    const titulo = juego.Titulo.toLowerCase();
    if (titulo.includes(buscado)) {
      resultado.push(juego);
    }
  }

  return resultado;
}

const listaTexto = buscarPorTexto(VIDEOJUEGOS, "evil");

if (listaTexto.length < 1) {
  console.log("No existe ningun juego con ese titulo")
} else {
  for (const juego of listaTexto) {
    console.log(juego);
  }
}

// Función añadir
function añadir(lista, juego) {
  const nuevoId = lista[lista.length - 1].Id + 1;
  juego.Id = nuevoId;
  lista.push(juego);
  return nuevoId;
}

console.log(`Juego añadido con id ${añadir(VIDEOJUEGOS, {
  Titulo: "Resident Evil 4",
  Desarrollador: "Capcom",
  Año: "2023-03-24",
  Genero: "Terror y supervivencia",
  Puntuacion: 93,
  Estado: "Jugando",
})}`);

// Función eliminar por id
function eliminarPorId(lista, id) {
  for (const juego of lista) {
    if (juego.Id === id) {
      lista.splice(lista.indexOf(juego), 1);
      return true;
    }
  }

  return false;
}

if (eliminarPorId(VIDEOJUEGOS, 8)) {
  console.log("Juego eliminado con exito")
} else {
  console.log("Juego no encontrado")
}

//Función estadísticas
function estadisticas(lista) {

  if (lista.length === 0) {
    return null;
  }

  let suma = 0;
  let maximo = lista[0];

  for (const juego of lista) {
    suma += juego.Puntuacion;

    if (juego.Puntuacion > maximo.Puntuacion) {
      maximo = juego;
    }
  }

  const media = suma / lista.length;

  return { total: suma, media: media, maximo: maximo }

}

estadisticas(VIDEOJUEGOS);

// ========================= SPRINT 1 =========================

// Reto 2

const listado = document.querySelector("#listado");

let totalJuegos = 0;

function crearTarjeta(juego) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  const titulo = document.createElement("h3");
  titulo.textContent = juego.Titulo;

  const datos = document.createElement("parrafo");
  datos.textContent = `${juego.Desarrollador} - ${juego.Genero} - ${juego.Puntuacion}`;

  const fecha = document.createElement("p");
  fecha.classList.add("fecha");
  fecha.textContent = fechaLegible(juego.Año);
  if (diasDesde(juego.Año) <= DIAS_RECIENTE) {
    tarjeta.classList.add("reciente");
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
    resumen.textContent = `Mostrando ${totalJuegos} de ${VIDEOJUEGOS.length} videojuegos`;
  } else {
    resumen.textContent = `No hay videojuegos que contengan ${buscador.value}`;
  }
  
}

const pEstadisticas = document.querySelector("#estadisticas");

function pintarEstadisticas(lista) {
  let stats = estadisticas(lista);

  if (stats === null) {
    console.warn("No hay datos");
    return;
  } else {
    pEstadisticas.textContent = `${stats.total} de puntos totales - ${stats.media} de puntuación media - Máxima Puntuación: ${stats.maximo.Puntuacion}`;
  }
}

pintarEstadisticas(VIDEOJUEGOS);

//Reto 2 Parte B

let textoBuscado = "";
let criterio = "ninguno";

function ordenar(lista, criterio) {
  const copia = [...lista];
  if (criterio === "nombre") {
    copia.sort((a, b) =>
      a.Titulo.localeCompare(b.Titulo)
    );
  } else if (criterio === "puntuacion") {
    copia.sort((a, b) => b.Puntuacion - a.Puntuacion);
  } else if (criterio === "fecha") {
    copia.sort((a, b) => crearFecha(b.Año) - crearFecha(a.Año));
  }

  return copia;
}

function actualizar() {
  const encontrados = buscarPorTexto(VIDEOJUEGOS, textoBuscado);
  const ordenados = ordenar(encontrados, criterio);
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

/*
ordenNombre.addEventListener("click", () => {
  criterio = "nombre";
  actualizar();
});
*/

ordenNombre.addEventListener("click", () => {
  elegirOrden("nombre")
});

/*
ordenPuntuacion.addEventListener("click", () => {
  criterio = "puntuacion";
  actualizar();
});
*/

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

// Parte B - Reto 2
// B2 - Tres funciones para las fechas

function crearFecha(texto) {
  return new Date(texto + "T00:00");
}

function fechaLegible(texto) {
  return crearFecha(texto).toLocaleDateString("es-ES", 
    {day:"numeric", month:"long", year:"numeric"}
  );
}

function diasDesde(texto) {
  const MS_DIA = 24 * 60 * 60 * 1000;
  const ms = Date.now() - crearFecha(texto).getTime();
  return Math.floor(ms/MS_DIA);
}

// B3 - La fecha en la tarjeta y lo reciente, destacado

// B4 - Ordenar por fecha
