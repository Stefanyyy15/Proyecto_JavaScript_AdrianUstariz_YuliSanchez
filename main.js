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

// BOTONES DE LOS SUBMENUS PELICULAS

const btnTraerTodosLosFilms = document.getElementById("allFilmsBtn");
const btnTraerTodosLosDirectores = document.getElementById("directorBtn");
const btnTraerTodosLosProductores = document.getElementById("productorBtn");
const btnTraerTodosLosFecha = document.getElementById("fechaBtn");

btnTraerTodosLosFilms.onclick = function () {
  verPeliculasAll();
};
btnTraerTodosLosDirectores.onclick = function () {
  verPeliculasDirector();
};
btnTraerTodosLosProductores.onclick = function () {
  verPeliculasProductor();
};
btnTraerTodosLosFecha.onclick = function () {
  verPeliculasFecha();
};
//---------------------------------------------------------------------------------------------------------------------//

// BOTONES DE LOS SUBMENUS PLANETAS

const btnTraerTodosLosplanetas = document.getElementById("allplanetasBtn");
const btnTraerTodosCondiciones = document.getElementById("allCondicionesBtn");
const btnTraerTodosPopularidad = document.getElementById("allPopularidadBtn");
const btnTraerTodosParametros = document.getElementById("allParametrosBtn");

btnTraerTodosLosplanetas.onclick = function () {
  verPlanetasAll();
};
btnTraerTodosCondiciones.onclick = function () {
  verPlanetasCondiciones();
};
btnTraerTodosPopularidad.onclick = function () {
  verPlanetasPopularidad();
};
btnTraerTodosParametros.onclick = function () {
  verPlanetasParametros();
};
//---------------------------------------------------------------------------------------------------------------------//

// BOTONES DE LOS SUBMENUS VEHICULOS

const btnTraerTodosLosvehiculos = document.getElementById("allvehiculosBtn");
const btnTraerTodosLosModelos = document.getElementById("allModeloBtn");
const btnTraerTodosLosEspecificaciones = document.getElementById("allSpecsBtn");
const btnTraerTodosLosParametros = document.getElementById("allparametrosBtn");

btnTraerTodosLosvehiculos.onclick = function () {
  verVehiculosAll();
};
btnTraerTodosLosModelos.onclick = function () {
  verModelo();
};
btnTraerTodosLosEspecificaciones.onclick = function () {
  verEspecificacion();
};
btnTraerTodosLosParametros.onclick = function () {
  verParametros();
};
//---------------------------------------------------------------------------------------------------------------------//
// BOTONES DE LOS SUBMENUS PERSONAJES

const btnTraerTodosLosPersonajes = document.getElementById("allpersonajesBtn");
const btnTraerTodosLosMedidas = document.getElementById("allmedidasBtn");
const btnTraerTodosLosInformacion = document.getElementById("allinformacionBtn");
const btnTraerTodosLosFisico = document.getElementById("allfisicoBtn");

btnTraerTodosLosPersonajes.onclick = function () {
  verPersonajesAll();
};
btnTraerTodosLosMedidas.onclick = function () {
  verMedidasAll();
};
btnTraerTodosLosInformacion.onclick = function () {
  verInformacionAll();
};
btnTraerTodosLosFisico.onclick = function () {
  verFisicoAll();
};
//---------------------------------------------------------------------------------------------------------------------//
// BOTONES DE LOS SUBMENUS ESPECIES
const btnTraerTodosLosEspecies = document.getElementById("allespeciesBtn");
const btnTraerTodosLosInfoEspecies = document.getElementById("allinfoEspeciesBtn");
const btnTraerTodosLosVitalidad = document.getElementById("allvitalidadBtn");
const btnTraerTodosLosFisicoEspecie = document.getElementById("allfisicoEspecieBtn");

btnTraerTodosLosEspecies.onclick = function () {
  verEspeciesAll();
};
btnTraerTodosLosInfoEspecies.onclick = function () {
  verInfoEspecieAll();
};
btnTraerTodosLosVitalidad.onclick = function () {
  verVitalidadAll();
};
btnTraerTodosLosFisicoEspecie.onclick = function () {
  verFisicoEspecieAll();
};
//---------------------------------------------------------------------------------------------------------------------//

// BOTONES DE LOS SUBMENUS NAVES

const btnTraerTodosLosNaves = document.getElementById("allnavesBtn");
const btnTraerTodosLosNavesModelos = document.getElementById("allNavesModeloBtn");
const btnTraerTodosLosNavesEspecificaciones = document.getElementById("allNavesSpecsBtn");
const btnTraerTodosLosNavesParametros = document.getElementById("allNavesparametrosBtn");

btnTraerTodosLosNaves.onclick = function () {
  verNavesAll();
};
btnTraerTodosLosNavesModelos.onclick = function () {
  verNavesModeloAll();
};
btnTraerTodosLosNavesEspecificaciones.onclick = function () {
  verNavesEspecificacionesAll();
};
btnTraerTodosLosNavesParametros.onclick = function () {
  verNavesParametroAll();
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
let urlVehicles = "https://swapi.py4e.com/api/vehicles";
let urlSpecies = "https://swapi.py4e.com/api/species";
let urlStarships = "https://swapi.py4e.com/api/starships";

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

//LLAMADOS DE PELICULAS
let urlImagenPelis = "https://mir-s3-cdn-cf.behance.net/project_modules/hd/b1baef46352143.58587967f05a1.gif";
let urlImagenPlaneti = "https://cdna.artstation.com/p/assets/images/images/015/414/184/original/elie-servantie-animation-star-wars-empire-at-war.gif?1548246960";
let urlImagenCarrito = "https://i.pinimg.com/originals/81/35/24/8135244303e3859332cd4124ef727a2c.gif";
let urlImagenPersonita = "https://jan-schlosser.de/wp-content/uploads/z_Pixel-Art-Star-Wars-Animation.gif";
let urlImagenEspecie = "https://giffiles.alphacoders.com/212/212696.gif";
let urlImagenNavesita = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/4b5683133022173.61b4a4cb0a205.gif";

async function verPeliculasAll() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const pelis = await peticion(urlPeliculas);
  const listaPelis = pelis.results;
  
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenPelis;
  imagen.width = 600;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";
  
  listaPelis.forEach(function (pelicula) {
    const texto = document.createElement("p");
    texto.classList.add("pelis_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${pelicula.title}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuFilms");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verPeliculasDirector() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const pelis = await peticion(urlPeliculas);
  const listaPelis = pelis.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenPelis;
  imagen.width = 600;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";
  

  listaPelis.forEach(function (pelicula) {
    const texto = document.createElement("p");
    texto.classList.add("pelis_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Film:</span> ${pelicula.title}<br> <span style="color: #c7c31c;">Director:</span> ${pelicula.director}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuFilms");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verPeliculasProductor() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const pelis = await peticion(urlPeliculas);
  const listaPelis = pelis.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenPelis;
  imagen.width = 600;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listaPelis.forEach(function (pelicula) {
    const texto = document.createElement("p");
    texto.classList.add("pelis_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Film:</span> ${pelicula.title}<br> <span style="color: #c7c31c;">Productor:</span> ${pelicula.producer}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuFilms");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verPeliculasFecha() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const pelis = await peticion(urlPeliculas);
  const listaPelis = pelis.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenPelis;
  imagen.width = 600;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listaPelis.forEach(function (pelicula) {
    const texto = document.createElement("p");
    texto.classList.add("pelis_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Film:</span> ${pelicula.title}<br> <span style="color: #c7c31c;">Release Date:</span> ${pelicula.release_date}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuFilms");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
//----------------------------------------------------------------------------------------------------------------------

// LLAMADOS DE PLANETAS

async function verPlanetasAll() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const planetas = await peticion(urlPlanets);
  const listaPlanetas = planetas.results;

  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenPlaneti;
  imagen.width = 600;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listaPlanetas.forEach(function (planeta) {
    const texto = document.createElement("p");
    texto.classList.add("planetas_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${planeta.name}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuPlanets");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verPlanetasCondiciones() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const planetas = await peticion(urlPlanets);
  const listaPlanetas = planetas.results;

  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenPlaneti;
  imagen.width = 600;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listaPlanetas.forEach(function (planeta) {
    const texto = document.createElement("p");
    texto.classList.add("planetas_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${planeta.name}<br> <span style="color: #c7c31c;">Rotation Period:</span> ${planeta.rotation_period}<br><span style="color: #c7c31c;">Orbital Period:</span> ${planeta.orbital_period}<br><span style="color: #c7c31c;">Gravity:</span> ${planeta.gravity}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuPlanets");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verPlanetasPopularidad() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const planetas = await peticion(urlPlanets);
  const listaPlanetas = planetas.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenPlaneti;
  imagen.width = 600;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listaPlanetas.forEach(function (planeta) {
    const texto = document.createElement("p");
    texto.classList.add("planetas_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${planeta.name}<br> <span style="color: #c7c31c;">Population:</span> ${planeta.population}<br><span style="color: #c7c31c;">Surface Water:</span> ${planeta.surface_water}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuPlanets");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verPlanetasParametros() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const planetas = await peticion(urlPlanets);
  const listaPlanetas = planetas.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenPlaneti;
  imagen.width = 600;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listaPlanetas.forEach(function (planeta) {
    const texto = document.createElement("p");
    texto.classList.add("planetas_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${planeta.name}<br> <span style="color: #c7c31c;">Diametro:</span> ${planeta.diameter}<br><span style="color: #c7c31c;">Climate:</span> ${planeta.climate}<br><span style="color: #c7c31c;">Terrain:</span> ${planeta.terrain}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuPlanets");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
//----------------------------------------------------------------------------------------------------------------------

// LLAMADOS DE VEHICULOS

async function verVehiculosAll() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const vehiculo = await peticion(urlVehicles);
  const listavehiculo = vehiculo.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenCarrito;
  imagen.width = 500;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listavehiculo.forEach(function (vehiculo) {
    const texto = document.createElement("p");
    texto.classList.add("vehiculo_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${vehiculo.name}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuVehicles");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verModelo() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const vehiculo = await peticion(urlVehicles);
  const listavehiculo = vehiculo.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenCarrito;
  imagen.width = 500;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listavehiculo.forEach(function (vehiculo) {
    const texto = document.createElement("p");
    texto.classList.add("vehiculo_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${vehiculo.name}<br><span style="color: #c7c31c;">Model:</span> ${vehiculo.model}<br><span style="color: #c7c31c;">Manufacturer:</span> ${vehiculo.manufacturer}<br><span style="color: #c7c31c;">Vehicle Class:</span> ${vehiculo.vehicle_class}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuVehicles");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verEspecificacion() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const vehiculo = await peticion(urlVehicles);
  const listavehiculo = vehiculo.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenCarrito;
  imagen.width = 500;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listavehiculo.forEach(function (vehiculo) {
    const texto = document.createElement("p");
    texto.classList.add("vehiculo_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${vehiculo.name}<br><span style="color: #c7c31c;">Passengers:</span> ${vehiculo.passengers}<br><span style="color: #c7c31c;">Cargo Capacity:</span> ${vehiculo.cargo_capacity}<br><span style="color: #c7c31c;">Lenght:</span> ${vehiculo.length}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuVehicles");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verParametros() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const vehiculo = await peticion(urlVehicles);
  const listavehiculo = vehiculo.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenCarrito;
  imagen.width = 500  ;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listavehiculo.forEach(function (vehiculo) {
    const texto = document.createElement("p");
    texto.classList.add("vehiculo_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${vehiculo.name}<br><span style="color: #c7c31c;">Cost:</span> $${vehiculo.cost_in_credits}<br><span style="color: #c7c31c;">Consumables:</span> ${vehiculo.consumables}<br><span style="color: #c7c31c;">Max Speed:</span> ${vehiculo.max_atmosphering_speed}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuVehicles");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
//----------------------------------------------------------------------------------------------------------------------

// LLAMADOS DE PERSONAJES

async function verPersonajesAll() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const personajes = await peticion(urlPersonajes);
  const listapersonajes = personajes.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenPersonita;
  imagen.width = 600;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listapersonajes.forEach(function (personajes) {
    const texto = document.createElement("p");
    texto.classList.add("personajes_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${personajes.name}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuCharacters");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verMedidasAll() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const personajes = await peticion(urlPersonajes);
  const listapersonajes = personajes.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenPersonita;
  imagen.width = 600;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listapersonajes.forEach(function (personajes) {
    const texto = document.createElement("p");
    texto.classList.add("personajes_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${personajes.name}<br><span style="color: #c7c31c;">Height:</span> ${personajes.height}<br><span style="color: #c7c31c;">Mass:</span> ${personajes.mass}`;

    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuCharacters");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verInformacionAll() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const personajes = await peticion(urlPersonajes);
  const listapersonajes = personajes.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenPersonita;
  imagen.width = 600;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listapersonajes.forEach(function (personajes) {
    const texto = document.createElement("p");
    texto.classList.add("personajes_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${personajes.name}<br><span style="color: #c7c31c;">Birth Year:</span> ${personajes.birth_year}<br><span style="color: #c7c31c;">Gender:</span> ${personajes.gender}`;

    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuCharacters");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verFisicoAll() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const personajes = await peticion(urlPersonajes);
  const listapersonajes = personajes.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenPersonita;
  imagen.width = 600;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listapersonajes.forEach(function (personajes) {
    const texto = document.createElement("p");
    texto.classList.add("personajes_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${personajes.name}<br><span style="color: #c7c31c;">Hair color:</span> ${personajes.hair_color}<br><span style="color: #c7c31c;">Skin Color:</span> ${personajes.skin_color}<br><span style="color: #c7c31c;">Eye Color:</span> ${personajes.eye_color}`;

    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuCharacters");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
//----------------------------------------------------------------------------------------------------------------------

// LLAMADOS DE ESPECIES

async function verEspeciesAll() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const especies = await peticion(urlSpecies);
  const listaespecies = especies.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenEspecie;
  imagen.width = 500;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listaespecies.forEach(function (especies) {
    const texto = document.createElement("p");
    texto.classList.add("especies_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${especies.name}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuSpecies");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verInfoEspecieAll() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const especies = await peticion(urlSpecies);
  const listaespecies = especies.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenEspecie;
  imagen.width = 500;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listaespecies.forEach(function (especies) {
    const texto = document.createElement("p");
    texto.classList.add("especies_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${especies.name}<br><span style="color: #c7c31c;">Classification:</span> ${especies.classification}<br><span style="color: #c7c31c;">Designation:</span> ${especies.designation}<br><span style="color: #c7c31c;">Language:</span> ${especies.language}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuSpecies");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verFisicoEspecieAll() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const especies = await peticion(urlSpecies);
  const listaespecies = especies.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenEspecie;
  imagen.width = 500;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listaespecies.forEach(function (especies) {
    const texto = document.createElement("p");
    texto.classList.add("personajes_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${especies.name}<br><span style="color: #c7c31c;">Hair color:</span> ${especies.hair_colors}<br><span style="color: #c7c31c;">Skin Color:</span> ${especies.skin_colors}<br><span style="color: #c7c31c;">Eye Color:</span> ${especies.eye_colors}`;

    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuSpecies");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verVitalidadAll() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const especies = await peticion(urlSpecies);
  const listaespecies = especies.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenEspecie;
  imagen.width = 500;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listaespecies.forEach(function (especies) {
    const texto = document.createElement("p");
    texto.classList.add("especies_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${especies.name}<br><span style="color: #c7c31c;">Average Height:</span> ${especies.average_height}<br><span style="color: #c7c31c;">Average Lifespan:</span> ${especies.average_lifespan}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuSpecies");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
//----------------------------------------------------------------------------------------------------------------------

// LLAMADOS DE NAVES

async function verNavesAll() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const naves = await peticion(urlStarships);
  const listanaves = naves.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenNavesita;
  imagen.width = 400;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listanaves.forEach(function (naves) {
    const texto = document.createElement("p");
    texto.classList.add("naves_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${naves.name}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuStarships");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verNavesEspecificacionesAll() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const naves = await peticion(urlStarships);
  const listanaves = naves.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenNavesita;
  imagen.width = 400;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listanaves.forEach(function (naves) {
    const texto = document.createElement("p");
    texto.classList.add("naves_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${naves.name}<br><span style="color: #c7c31c;">Passengers:</span> ${naves.passengers}<br><span style="color: #c7c31c;">Cargo Capacity:</span> ${naves.cargo_capacity}<br><span style="color: #c7c31c;">Length:</span> ${naves.length}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuStarships");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verNavesModeloAll() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const naves = await peticion(urlStarships);
  const listanaves = naves.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenNavesita;
  imagen.width = 400;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listanaves.forEach(function (naves) {
    const texto = document.createElement("p");
    texto.classList.add("naves_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${naves.name}<br><span style="color: #c7c31c;">Model:</span> ${naves.model}<br><span style="color: #c7c31c;">Cargo Manufacturer:</span> ${naves.manufacturer}<br><span style="color: #c7c31c;">Starship Class:</span> ${naves.starship_class}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuStarships");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
async function verNavesParametroAll() {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  const naves = await peticion(urlStarships);
  const listanaves = naves.results;
  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img")
  imagenes.innerHTML = "";
  imagen.src = urlImagenNavesita;
  imagen.width = 400;
  imagen.alt = "personajesStarWars";
  imagenes.appendChild(imagen)
  contenedor.innerHTML = "";

  listanaves.forEach(function (naves) {
    const texto = document.createElement("p");
    texto.classList.add("naves_list");
    texto.innerHTML = `<span style="color: #c7c31c;">Nombre:</span> ${naves.name}<br><span style="color: #c7c31c;">Cost:</span> $${naves.cost_in_credits}<br><span style="color: #c7c31c;">Consumables:</span> ${naves.consumables}<br><span style="color: #c7c31c;">Max Speed:</span> ${naves.max_atmosphering_speed}`;
    contenedor.appendChild(texto);
  });
  const submenu = document.getElementById("submenuStarships");
  submenu.classList.remove("submenus-active")
  submenu.classList.add("submenus")
}
//----------------------------------------------------------------------------------------------------------------------