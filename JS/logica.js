function listarTodos(listaJuegos) {
  const DEV = "Nintendo";

  console.log("---TODOS LOS JUEGOS---");
  for (const juego of listaJuegos) {
    const plataforma =
      juego.Desarrollador === DEV ? "Exclusivo" : "Multiplataforma";
    console.log(`${juego.Titulo} - ${plataforma}`);
  }
}

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

// Función listar
function listar(lista) {
  for (const juego of lista) {
    console.log(`${juego.Id} - ${juego.Titulo} - ${juego.Desarrollador} - ${juego.Año} - ${juego.Genero} - ${juego.Puntuacion} - ${juego.Estado}`);
  }
}

// Función buscarPorTexto
export function buscarPorTexto(lista, texto) {
  const buscado = texto.toLowerCase();
  const resultado = lista.filter((v) => v.Titulo.toLowerCase().includes(buscado));

  return resultado;
}

// Función añadir
export function añadir(lista, juego) {
  const nuevoId = lista[lista.length - 1].Id + 1;
  juego.Id = nuevoId;
  lista.push(juego);
  return nuevoId;
}

// Función eliminar por id
export function eliminarPorId(lista, id) {
  for (const juego of lista) {
    if (juego.Id === id) {
      lista.splice(lista.indexOf(juego), 1);
      return true;
    }
  }

  return false;
}

//Función estadísticas
export function estadisticas(lista) {

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

// ========================= SPRINT 1 =========================

// Reto 2

//Reto 2 Parte B

export function ordenar(lista, criterio) {
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

// Parte B - Reto 2
// B2 - Tres funciones para las fechas

function crearFecha(texto) {
  return new Date(texto + "T00:00");
}

export function fechaLegible(texto) {
  return crearFecha(texto).toLocaleDateString("es-ES", 
    {day:"numeric", month:"long", year:"numeric"}
  );
}

export function diasDesde(texto) {
  const MS_DIA = 24 * 60 * 60 * 1000;
  const ms = Date.now() - crearFecha(texto).getTime();
  return Math.floor(ms/MS_DIA);
}