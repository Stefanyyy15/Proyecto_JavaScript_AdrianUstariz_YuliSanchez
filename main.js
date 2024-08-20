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

//---------------------------------------------------------------------------------------------------------------------//

//BOTONES PARA ABRIR SUBMENUS

const btnPersonajes = document.getElementById("personajesBtn");
const btnPelis = document.getElementById("peliculasBtn");
const btnPlanetas = document.getElementById("planetasBtn");
const btnVehicles = document.getElementById("vehiclesBtn");
const btnSpecies = document.getElementById("speciesBtn");
const btnStarships = document.getElementById("starshipsBtn");
const textoInicial = document.querySelector(".texto_inicial");

//---------------------------------------------------------------------------------------------------------------------//

// BOTONES DE LOS SUBMENUS

const btnTraerTodosLosFilms = document.getElementById("allFilmsBtn");

btnTraerTodosLosFilms.onclick = function () {
  verPeliculas();
};

//---------------------------------------------------------------------------------------------------------------------//

//FUNCIONES PARA ABRIR LOS SUBMENUS - el evento onclick recibe siempre una funcion, en este caso como la funcion recibe parametros, toca envolverla en una funcion x

btnPersonajes.onclick = function () {
  abriendoMenusitos("submenuCharacters");
};
btnPelis.onclick = function () {
  abriendoMenusitos("submenuFilms");
};
btnPlanetas.onclick = function () {
  abriendoMenusitos("submenuPlanets");
};
btnVehicles.onclick = function () {
  abriendoMenusitos("submenuVehicles");
};
btnSpecies.onclick = function () {
  abriendoMenusitos("submenuSpecies");
};
btnStarships.onclick = function () {
  abriendoMenusitos("submenuStarships");
};

//--------------------------------------------------------------------------------------------------------------------//

let urlPersonajes = "https://swapi.py4e.com/api/people";
let urlPeliculas = "https://swapi.py4e.com/api/films";
let urlPlanets = "https://swapi.py4e.com/api/planets";

//---------------------------------------------------------------------------------------------------------------------//

// FUNCION DE ABRIR LOS MENU - aca la funcion recibe el id del submenu de cada menu

async function abriendoMenusitos(subMenuId) {
  const btn = document.getElementById(subMenuId);
  if (btn.classList.contains("submenus-active")) {
    btn.classList.remove("submenus-active");
    btn.classList.add("submenus");
  } else {
    btn.classList.remove("submenus");
    btn.classList.add("submenus-active");
  }
}

//---------------------------------------------------------------------------------------------------------------------//

// LLAMADOS DE PERSONAJES

async function traerPersonajes() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const gif = document.querySelector(".scroll");
  const personajes = await peticion(urlPersonajes);
  const listaPersonajes = personajes.results;
  contenedor.innerHTML = "";
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  gif.classList.add("scroll-active");
  listaPersonajes.forEach(function (personaje) {
    const texto = document.createElement("p");
    texto.classList.add("personajes_list");
    texto.innerHTML = `Nombre: ${personaje.name}`;
    contenedor.appendChild(texto);
  });
}

//----------------------------------------------------------------------------------------------------------------------

//LLAMADOS DE PELICULAS

async function verPeliculas() {
  const contenedor = document.querySelector(".contenedor");
  const pelis = await peticion(urlPeliculas);
  const listaPelis = pelis.results;
  textoInicial.classList.add("texto_oculto");
  contenedor.innerHTML = "";

  listaPelis.forEach(function (pelicula) {
    const texto = document.createElement("p");
    texto.classList.add("pelis_list");
    texto.innerHTML = `Nombre: ${pelicula.title}`;
    contenedor.appendChild(texto);
  });
}

//----------------------------------------------------------------------------------------------------------------------

// LLAMADOS DE PLANETAS

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

//----------------------------------------------------------------------------------------------------------------------
