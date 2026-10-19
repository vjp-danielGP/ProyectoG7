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
      resultado.push(juego.Titulo);
    }
  }

  return resultado;
}

const listaTexto = buscarPorTexto(VIDEOJUEGOS, prompt("Introduce el título del videojuego: "));

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

if (eliminarPorId(VIDEOJUEGOS, Number(prompt("Introduce el id del videojuego que quiera eliminar: ")))) {
  console.log("Juego eliminado con exito")
} else {
  console.log("Juego no encontrado")
}

//Función estadísticas
function estadisticas(lista) {

  if (lista.length === 0) {
    console.warn("No hay datos");
    return;
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
  console.log(`Videojuegos: ${lista.length}`);
  console.log(`Puntuación total: ${suma}`);
  console.log(`Puntuación media: ${media.toFixed(1)}`);
  console.log(`El juego con mayor puntuación es: ${maximo.Titulo} - ${maximo.Puntuacion}`);


}

estadisticas(VIDEOJUEGOS);

