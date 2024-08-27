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
  Pelis(
    urlPeliculas,
    urlImagenPelis,
    600,
    "submenuFilms",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.title}<br>`;
    }
  );
};
btnTraerTodosLosDirectores.onclick = function () {
  Pelis(
    urlPeliculas,
    urlImagenPelis,
    600,
    "submenuFilms",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Film:</span> ${todo.title}<br> <span style="color: #c7c31c;">Director:</span> ${todo.director}`;
    }
  );
};
btnTraerTodosLosProductores.onclick = function () {
  Pelis(
    urlPeliculas,
    urlImagenPelis,
    600,
    "submenuFilms",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Film:</span> ${todo.title}<br> <span style="color: #c7c31c;">Productor:</span> ${todo.producer}`;
    }
  );
};
btnTraerTodosLosFecha.onclick = function () {
  Pelis(
    urlPeliculas,
    urlImagenPelis,
    600,
    "submenuFilms",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Film:</span> ${todo.title}<br> <span style="color: #c7c31c;">Release Date:</span> ${todo.release_date}`;
    }
  );
};
//---------------------------------------------------------------------------------------------------------------------//

// BOTONES DE LOS SUBMENUS PLANETAS

const btnTraerTodosLosplanetas = document.getElementById("allplanetasBtn");
const btnTraerTodosCondiciones = document.getElementById("allCondicionesBtn");
const btnTraerTodosPopularidad = document.getElementById("allPopularidadBtn");
const btnTraerTodosParametros = document.getElementById("allParametrosBtn");

btnTraerTodosLosplanetas.onclick = function () {
  verTodo(
    urlPlanets,
    urlImagenPlaneti,
    600,
    "submenuPlanets",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}`;
    },7
  );
};
btnTraerTodosCondiciones.onclick = function () {
  verTodo(
    urlPlanets,
    urlImagenPlaneti,
    600,
    "submenuPlanets",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}<br> <span style="color: #c7c31c;">Rotation Period:</span> ${todo.rotation_period}<br><span style="color: #c7c31c;">Orbital Period:</span> ${todo.orbital_period}<br><span style="color: #c7c31c;">Gravity:</span> ${todo.gravity}`;
    },7
  );
};
btnTraerTodosPopularidad.onclick = function () {
  verTodo(
    urlPlanets,
    urlImagenPlaneti,
    600,
    "submenuPlanets",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}<br> <span style="color: #c7c31c;">Population:</span> ${todo.population}<br><span style="color: #c7c31c;">Surface Water:</span> ${todo.surface_water}`;
    },7
  );
};
btnTraerTodosParametros.onclick = function () {
  verTodo(
    urlPlanets,
    urlImagenPlaneti,
    600,
    "submenuPlanets",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}<br> <span style="color: #c7c31c;">Diametro:</span> ${todo.diameter}<br><span style="color: #c7c31c;">Climate:</span> ${todo.climate}<br><span style="color: #c7c31c;">Terrain:</span> ${todo.terrain}`;
    },7
  );
};
//---------------------------------------------------------------------------------------------------------------------//

// BOTONES DE LOS SUBMENUS VEHICULOS

const btnTraerTodosLosvehiculos = document.getElementById("allvehiculosBtn");
const btnTraerTodosLosModelos = document.getElementById("allModeloBtn");
const btnTraerTodosLosEspecificaciones = document.getElementById("allSpecsBtn");
const btnTraerTodosLosParametros = document.getElementById("allparametrosBtn");

btnTraerTodosLosvehiculos.onclick = function () {
  verTodo(
    urlVehicles,
    urlImagenCarrito,
    500,
    "submenuVehicles",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}`;
    },5
  );
};
btnTraerTodosLosModelos.onclick = function () {
  verTodo(
    urlVehicles,
    urlImagenCarrito,
    500,
    "submenuVehicles",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}<br><span style="color: #c7c31c;">Model:</span> ${todo.model}<br><span style="color: #c7c31c;">Manufacturer:</span> ${todo.manufacturer}<br><span style="color: #c7c31c;">Vehicle Class:</span> ${todo.vehicle_class}`;
    },5
  );
};
btnTraerTodosLosEspecificaciones.onclick = function () {
  verTodo(
    urlVehicles,
    urlImagenCarrito,
    500,
    "submenuVehicles",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}<br><span style="color: #c7c31c;">Passengers:</span> ${todo.passengers}<br><span style="color: #c7c31c;">Cargo Capacity:</span> ${todo.cargo_capacity}<br><span style="color: #c7c31c;">Lenght:</span> ${todo.length}`;
    },5
  );
};
btnTraerTodosLosParametros.onclick = function () {
  verTodo(
    urlVehicles,
    urlImagenCarrito,
    500,
    "submenuVehicles",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}<br><span style="color: #c7c31c;">Cost:</span> $${todo.cost_in_credits}<br><span style="color: #c7c31c;">Consumables:</span> ${todo.consumables}<br><span style="color: #c7c31c;">Max Speed:</span> ${todo.max_atmosphering_speed}`;
    },5
  );
};
//---------------------------------------------------------------------------------------------------------------------//
// BOTONES DE LOS SUBMENUS PERSONAJES

const btnTraerTodosLosPersonajes = document.getElementById("allpersonajesBtn");
const btnTraerTodosLosMedidas = document.getElementById("allmedidasBtn");
const btnTraerTodosLosInformacion =
  document.getElementById("allinformacionBtn");
const btnTraerTodosLosFisico = document.getElementById("allfisicoBtn");

btnTraerTodosLosPersonajes.onclick = function () {
  verTodo(
    urlPersonajes,
    urlImagenPersonita,
    600,
    "submenuCharacters",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}`;
    },10
  );
};
btnTraerTodosLosMedidas.onclick = function () {
  verTodo(
    urlPersonajes,
    urlImagenPersonita,
    600,
    "submenuCharacters",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}<br><span style="color: #c7c31c;">Height:</span> ${todo.height}<br><span style="color: #c7c31c;">Mass:</span> ${todo.mass}`;
    },10
  );
};
btnTraerTodosLosInformacion.onclick = function () {
  verTodo(
    urlPersonajes,
    urlImagenPersonita,
    600,
    "submenuCharacters",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}<br><span style="color: #c7c31c;">Birth Year:</span> ${todo.birth_year}<br><span style="color: #c7c31c;">Gender:</span> ${todo.gender}`;
    }, 10
  );
};
btnTraerTodosLosFisico.onclick = function () {
  verTodo(
    urlPersonajes,
    urlImagenPersonita,
    600,
    "submenuCharacters",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}<br><span style="color: #c7c31c;">Hair color:</span> ${todo.hair_color}<br><span style="color: #c7c31c;">Skin Color:</span> ${todo.skin_color}<br><span style="color: #c7c31c;">Eye Color:</span> ${todo.eye_color}`;
    },
    10
  );
};
//---------------------------------------------------------------------------------------------------------------------//
// BOTONES DE LOS SUBMENUS ESPECIES
const btnTraerTodosLosEspecies = document.getElementById("allespeciesBtn");
const btnTraerTodosLosInfoEspecies =
  document.getElementById("allinfoEspeciesBtn");
const btnTraerTodosLosVitalidad = document.getElementById("allvitalidadBtn");
const btnTraerTodosLosFisicoEspecie = document.getElementById(
  "allfisicoEspecieBtn"
);

btnTraerTodosLosEspecies.onclick = function () {
  verTodo(
    urlSpecies,
    urlImagenEspecie,
    500,
    "submenuSpecies",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}`;
    },5
  );
};
btnTraerTodosLosInfoEspecies.onclick = function () {
  verTodo(
    urlSpecies,
    urlImagenEspecie,
    500,
    "submenuSpecies",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}<br><span style="color: #c7c31c;">Classification:</span> ${todo.classification}<br><span style="color: #c7c31c;">Designation:</span> ${todo.designation}<br><span style="color: #c7c31c;">Language:</span> ${todo.language}`;
    },5
  );
};
btnTraerTodosLosVitalidad.onclick = function () {
  verTodo(
    urlSpecies,
    urlImagenEspecie,
    500,
    "submenuSpecies",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}<br><span style="color: #c7c31c;">Average Height:</span> ${todo.average_height}<br><span style="color: #c7c31c;">Average Lifespan:</span> ${todo.average_lifespan}`;
    },5
  );
};
btnTraerTodosLosFisicoEspecie.onclick = function () {
  verTodo(
    urlSpecies,
    urlImagenEspecie,
    500,
    "submenuSpecies",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}<br><span style="color: #c7c31c;">Hair color:</span> ${todo.hair_colors}<br><span style="color: #c7c31c;">Skin Color:</span> ${todo.skin_colors}<br><span style="color: #c7c31c;">Eye Color:</span> ${todo.eye_colors}`;
    },5
  );
};
//---------------------------------------------------------------------------------------------------------------------//

// BOTONES DE LOS SUBMENUS NAVES

const btnTraerTodosLosNaves = document.getElementById("allnavesBtn");
const btnTraerTodosLosNavesModelos =
  document.getElementById("allNavesModeloBtn");
const btnTraerTodosLosNavesEspecificaciones =
  document.getElementById("allNavesSpecsBtn");
const btnTraerTodosLosNavesParametros = document.getElementById(
  "allNavesparametrosBtn"
);

btnTraerTodosLosNaves.onclick = function () {
  verTodo(
    urlStarships,
    urlImagenNavesita,
    400,
    "submenuStarships",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}`;
    },5
  );
};
btnTraerTodosLosNavesModelos.onclick = function () {
  verTodo(
    urlStarships,
    urlImagenNavesita,
    400,
    "submenuStarships",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}<br><span style="color: #c7c31c;">Model:</span> ${todo.model}<br><span style="color: #c7c31c;">Cargo Manufacturer:</span> ${todo.manufacturer}<br><span style="color: #c7c31c;">Starship Class:</span> ${todo.starship_class}`;
    },5
  );
};
btnTraerTodosLosNavesEspecificaciones.onclick = function () {
  verTodo(
    urlStarships,
    urlImagenNavesita,
    400,
    "submenuStarships",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}<br><span style="color: #c7c31c;">Passengers:</span> ${todo.passengers}<br><span style="color: #c7c31c;">Cargo Capacity:</span> ${todo.cargo_capacity}<br><span style="color: #c7c31c;">Length:</span> ${todo.length}`;
    },5
  );
};
btnTraerTodosLosNavesParametros.onclick = function () {
  verTodo(
    urlStarships,
    urlImagenNavesita,
    400,
    "submenuStarships",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}<br><span style="color: #c7c31c;">Cost:</span> $${todo.cost_in_credits}<br><span style="color: #c7c31c;">Consumables:</span> ${todo.consumables}<br><span style="color: #c7c31c;">Max Speed:</span> ${todo.max_atmosphering_speed}`;
    },5
  );
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

let urlPersonajes = "https://swapi.py4e.com/api/people?page=";
let urlPeliculas = "https://swapi.py4e.com/api/films";
let urlPlanets = "https://swapi.py4e.com/api/planets?page=";
let urlVehicles = "https://swapi.py4e.com/api/vehicles?page=";
let urlSpecies = "https://swapi.py4e.com/api/species?page=";
let urlStarships = "https://swapi.py4e.com/api/starships?page=";

//---------------------------------------------------------------------------------------------------------------------//

// FUNCION DE ABRIR LOS MENU - aca la funcion recibe el id del submenu de cada menu

async function abriendoMenusitos(subMenuId) {
  const activeSubmenu = document.querySelector(".submenus-active");
  if (activeSubmenu && activeSubmenu.id !== subMenuId) {
    activeSubmenu.classList.remove("submenus-active");
    activeSubmenu.classList.add("submenus");
  }

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

//LLAMADOS DE TODO
let urlImagenPelis =
  "https://mir-s3-cdn-cf.behance.net/project_modules/hd/b1baef46352143.58587967f05a1.gif";
let urlImagenPlaneti =
  "https://cdna.artstation.com/p/assets/images/images/015/414/184/original/elie-servantie-animation-star-wars-empire-at-war.gif?1548246960";
let urlImagenCarrito =
  "https://i.pinimg.com/originals/81/35/24/8135244303e3859332cd4124ef727a2c.gif";
let urlImagenPersonita =
  "https://jan-schlosser.de/wp-content/uploads/z_Pixel-Art-Star-Wars-Animation.gif";
let urlImagenEspecie = "https://giffiles.alphacoders.com/212/212696.gif";
let urlImagenNavesita =
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/4b5683133022173.61b4a4cb0a205.gif";

  async function verTodo(
    url,
    urlImagen,
    tamañoImagen,
    susu,
    generarContenidoHtml,
    num
  ) {
    const contenedor = document.querySelector(".contenedor");
    const imagenes = document.querySelector(".contenedor2");
  
    let resultados = [];
    try{
      for (let i = 1; i < num; i++) {
        const todoData = await peticion(url + i);
        resultados = resultados.concat(todoData.results);
      }
  
      textoInicial.classList.add("texto_oculto");
      imagenes.classList.add("contenedor2-active");
      imagenes.innerHTML = "";
      const imagen = document.createElement("img");
      imagen.src = urlImagen;
      imagen.width = tamañoImagen;
      imagenes.appendChild(imagen);
  
      contenedor.innerHTML = "";
      resultados.forEach(function (todo) {
        const texto = document.createElement("p");
        texto.classList.add("todo_list");
        texto.innerHTML = generarContenidoHtml(todo);
        contenedor.appendChild(texto);
      });
  
      const submenu = document.getElementById(susu);
      submenu.classList.remove("submenus-active");
      submenu.classList.add("submenus");
    } catch(error){
      console.log("No hay mas datos")
    }
  }
  async function Pelis(
    url,
    urlImagen,
    tamañoImagen,
    susu,
    generarContenidoHtml
  ) {
    const contenedor = document.querySelector(".contenedor");
    const imagenes = document.querySelector(".contenedor2");
    const todoData = await peticion(url);
    const listatodo = todoData.results;
  
    textoInicial.classList.add("texto_oculto");
    imagenes.classList.add("contenedor2-active");
    const imagen = document.createElement("img");
    imagenes.innerHTML = "";
    imagen.src = urlImagen;
    imagen.width = tamañoImagen;
    imagenes.appendChild(imagen);
    contenedor.innerHTML = "";
  
    listatodo.forEach(function (todo) {
      const texto = document.createElement("p");
      texto.classList.add("todo_list");
  
      texto.innerHTML = generarContenidoHtml(todo);
  
      contenedor.appendChild(texto);
    });
  
    const submenu = document.getElementById(susu);
    submenu.classList.remove("submenus-active");
    submenu.classList.add("submenus");
  }