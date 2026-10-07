const NOMBRE_APP = "BiblioGame";

const ELEMENTOS = [
    {Titulo: "Resident Evil 2", Desarrollador: "Capcom", Año: "2019-01-25", Genero: "Terror y supervivencia", Puntuacion: 91, Estado: "Finalizado"}
];

console.log(`${NOMBRE_APP}: ${ELEMENTOS.length} elementos cargados`);
console.table(ELEMENTOS);