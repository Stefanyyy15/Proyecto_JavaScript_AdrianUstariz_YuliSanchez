const cabeceras = new Headers();
cabeceras.set("Content-Type", "application/json");
cabeceras.set("Content-Encoding", "br");

async function peticion(url) {
  const respuesta = await fetch(url);
  if (respuesta.ok) {
    const info = await respuesta.json();
    return info;
  } else {
    return [];
  }
}

const btnPersonajes = document.getElementById("personajesBtn");
const btnPelis = document.getElementById("peliculasBtn");
const btnPlanetas = document.getElementById("planetasBtn");
const textoInicial = document.querySelector(".texto_inicial");

btnPersonajes.onclick = traerPersonajes;
btnPelis.onclick = verPeliculas;
btnPlanetas.onclick = verPlanetas;

let urlPersonajes = "https://swapi.py4e.com/api/people";
let urlPeliculas = "https://swapi.py4e.com/api/films";
let urlPlanets = "https://swapi.py4e.com/api/planets";

async function traerPersonajes() {
  const contenedor = document.querySelector(".contenedor");
  const personajes = await peticion(urlPersonajes);
  const listaPersonajes = personajes.results;
  contenedor.innerHTML = "";
  textoInicial.classList.add("texto_oculto");

  listaPersonajes.forEach(function (personaje) {
    const texto = document.createElement("p");
    texto.classList.add("personajes_list");
    texto.innerHTML = `Nombre: ${personaje.name} | Altura: ${personaje.height} | Peso: ${personaje.mass}`;
    contenedor.appendChild(texto);
  });
}

async function verPeliculas() {
  const contenedor = document.querySelector(".contenedor");
  const pelis = await peticion(urlPeliculas);
  const listaPelis = pelis.results;
  textoInicial.classList.add("texto_oculto");
  contenedor.innerHTML = "";

  listaPelis.forEach(function (personaje) {
    const texto = document.createElement("p");
    texto.classList.add("pelis_list");
    texto.innerHTML = `Nombre: ${personaje.title} | Director: ${personaje.director} | Productor: ${personaje.producer} | Fecha: ${personaje.release_date} `;
    contenedor.appendChild(texto);
  });
}

async function verPlanetas() {
  const contenedor = document.querySelector(".contenedor");
  const planetas = await peticion(urlPlanets);
  const listaPlanetas = planetas.results;
  textoInicial.classList.add("texto_oculto");
  contenedor.innerHTML = "";

  listaPlanetas.forEach(function (planeta) {
    const texto = document.createElement("p");
    texto.classList.add("pelis_list");
    texto.innerHTML = `Nombre: ${planeta.name} | Clima: ${planeta.climate} | Diametro: ${planeta.diameter} `;
    contenedor.appendChild(texto);
  });
}
