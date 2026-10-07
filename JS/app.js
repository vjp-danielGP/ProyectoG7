const NOMBRE_APP = "BiblioGame";

const VIDEOJUEGOS = [
  {
    Titulo: "Resident Evil 2",
    Desarrollador: "Capcom",
    Año: "2019-01-25",
    Genero: "Terror y supervivencia",
    Puntuacion: 91,
    Estado: "Finalizado",
  },
  {
    Titulo: "Elden Ring",
    Desarrollador: "FromSoftware",
    Año: "2022-02-25",
    Genero: "Soulslike",
    Puntuacion: 96,
    Estado: "Pendiente",
  },
  {
    Titulo: "The Legend of Zelda: Breath of the Wild",
    Desarrollador: "Nintendo",
    Año: "2017-03-03",
    Genero: "Aventura",
    Puntuacion: 97,
    Estado: "Pendiente",
  },
  {
    Titulo: "Red Dead Redemption 2",
    Desarrollador: "Rockstar Games",
    Año: "2018-10-26",
    Genero: "Aventura",
    Puntuacion: 97,
    Estado: "Jugando",
  },
  {
    Titulo: "Tekken 3",
    Desarrollador: "Namco",
    Año: "1998-04-29",
    Genero: "Lucha",
    Puntuacion: 96,
    Estado: "Finalizado",
  },
  {
    Titulo: "Metroid Prime",
    Desarrollador: "Retro Studios",
    Año: "2002-11-17",
    Genero: "Acción",
    Puntuacion: 97,
    Estado: "Pendiente",
  },
  {
    Titulo: "Half-Life 2",
    Desarrollador: "Valve Software",
    Año: "2004-11-16",
    Genero: "Terror y supervivencia",
    Puntuacion: 96,
    Estado: "Pendiente",
  },
  {
    Titulo: "BioShock",
    Desarrollador: "Irrational Games",
    Año: "2007-08-21",
    Genero: "Terror y disparos",
    Puntuacion: 96,
    Estado: "Jugando",
  },
  {
    Titulo: "Super Mario Galaxy 2",
    Desarrollador: "Nintendo",
    Año: "2010-05-23",
    Genero: "Plataformas",
    Puntuacion: 98,
    Estado: "Finalizado",
  },
  {
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
