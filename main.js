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
const btnMasDetallesFilmsCharacters = document.getElementById("readMoreBtn");

btnMasDetallesFilmsCharacters.addEventListener("click", function () {
  const submenu = document.getElementById("verMasFilms");
  const submenuOrg = document.getElementById("submenuFilms");
  if (submenu.classList.contains("submenusVerMas")) {
    submenu.classList.remove("submenusVerMas");
    submenu.classList.add("submenusVerMas-active");
    submenuOrg.classList.remove("submenus-active");
    submenuOrg.classList.add("submenus");
  } else {
    submenu.classList.remove("submenusVerMas-active");
    submenu.classList.add("submenusVerMas");
  }
});

document.querySelectorAll("#filmCategories button").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".submenusVerMas-active, .submenus-active")
      .forEach((submenu) => {
        submenu.classList.remove("submenusVerMas-active", "submenus-active");
        submenu.classList.add("submenus", "submenusVerMas");
      });
  });
});

document.getElementById("verMasFilms").addEventListener("click", function (e) {
  if (e.target.classList.contains("botonistos-submenu")) {
    document
      .getElementById("verMasFilms")
      .classList.remove("submenusVerMas-active");
    document.getElementById("verMasFilms").classList.add("submenusVerMas");

    const filmCategories = document.getElementById("filmCategories");
    filmCategories.classList.remove("submenusVerMasCategories");
    filmCategories.classList.add("submenusVerMas-active");
  }
});

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

// BOTONES SUBMENUS PELICULAS------------------------------------------------------------------------------------------//

document.getElementById("readMoreBtn").addEventListener("click", function () {
  const submenu = document.getElementById("verMasFilms");
  submenu.classList.remove("submenusVerMas");
  submenu.classList.add("submenusVerMas-active");

  const submenuOrg = document.getElementById("submenuFilms");
  submenuOrg.classList.remove("submenus-active");
  submenuOrg.classList.add("submenus");
});

const peliculas = [
  { id: "newHopeBtn", title: "A New Hope" },
  { id: "empStrikeBtn", title: "The Empire Strikes Back" },
  { id: "returnJediBtn", title: "Return of the Jedi" },
  { id: "phantomBtn", title: "The Phantom Menace" },
  { id: "clonesBtn", title: "Attack of the Clones" },
  { id: "revengeBtn", title: "Revenge of the Sith" },
  { id: "forceBtn", title: "The Force Awakens" },
];

let selectedMovie = "";

peliculas.forEach(function (pelicula) {
  const element = document.getElementById(pelicula.id);
  element.addEventListener("click", function () {
    selectedMovie = pelicula.title;

    const submenu = document.getElementById("verMasFilms");
    submenu.classList.remove("submenusVerMas-active");
    submenu.classList.add("submenusVerMas");

    const filmCategories = document.getElementById("filmCategories");
    filmCategories.classList.remove("submenusVerMasCategories");
    filmCategories.classList.add("submenusVerMas-active");
  });
});

document
  .getElementById("verMasCharacters")
  .addEventListener("click", function () {
    if (selectedMovie) {
      llamarPersonajesPorPeliculas(
        urlPeliculas,
        selectedMovie,
        urlImagenPelis,
        600
      );
    } else {
      console.log("No movie selected");
    }
  });

async function llamarPersonajesPorPeliculas(
  url,
  pelicula,
  urlImagen,
  tamañoImagen
) {
  let contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  contenedor.innerHTML = "";
  try {
    const respuesta = await peticion(url);
    const respuesta2 = respuesta.results;
    const peliculasFiltradas = respuesta2.filter(
      (item) => item.title === pelicula
    );
    if (peliculasFiltradas.length > 0) {
      const urlsPersonajes = peliculasFiltradas[0].characters;
      const nombresPersonajes = await obtenerNombresPersonajes(urlsPersonajes);
      nombresPersonajes.forEach(function (nombre) {
        const texto = document.createElement("p");
        texto.innerHTML = `<span style="color: #c7c31c;">Character:</span> ${nombre}`;
        contenedor.append(texto);
      });
      textoInicial.classList.add("texto_oculto");
      imagenes.classList.add("contenedor2-active");
      imagenes.innerHTML = "";
      const imagen = document.createElement("img");
      imagen.src = urlImagen;
      imagen.width = tamañoImagen;
      imagenes.appendChild(imagen);
    } else {
      console.log("Película no encontrada");
    }
  } catch (error) {
    console.error("Error al llamar a los personajes por película:", error);
  }
}

async function obtenerNombresPersonajes(urls) {
  const nombres = [];
  for (const url of urls) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      nombres.push(data.name);
    } catch (error) {
      console.error("No se pudo obtener el nombre del personaje:", error);
    }
  }
  return nombres;
}

peliculas.forEach(function (pelicula) {
  const element = document.getElementById(pelicula.id);
  element.addEventListener("click", function () {
    selectedMovie = pelicula.title;

    const submenu = document.getElementById("verMasFilms");
    submenu.classList.remove("submenusVerMas-active");
    submenu.classList.add("submenusVerMas");

    const filmCategories = document.getElementById("filmCategories");
    filmCategories.classList.remove("submenusVerMasCategories");
    filmCategories.classList.add("submenusVerMas-active");
  });
});

//------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------//

// BOTONES DE LOS SUBMENUS PLANETAS

const btnTraerTodosLosplanetas = document.getElementById("allplanetasBtn");
const btnTraerTodosCondiciones = document.getElementById("allCondicionesBtn");
const btnTraerTodosPopularidad = document.getElementById("allPopularidadBtn");
const btnTraerTodosParametros = document.getElementById("allParametrosBtn");
const btnTraerResidentes = document.getElementById("allResidents");

btnTraerResidentes.addEventListener("click", function () {
  traerResidentes(urlPlanets, 7, "submenuPlanets", urlImagenPlaneti, 500);
});

async function traerResidentes(url, num, susu, urlImagen, tamañoImagen) {
  let resultadosPlanetas = [];
  const imagenes = document.querySelector(".contenedor2");

  for (let i = 1; i < num; i++) {
    const todoData = await peticion(url + i);
    resultadosPlanetas = resultadosPlanetas.concat(todoData.results);
  }

  const resultadosP = resultadosPlanetas.filter(
    (planeta) => planeta.residents.length > 0 && planeta.name !== "Unknown"
  );

  const contenedor = document.querySelector(".contenedor");
  contenedor.innerHTML = "";

  for (const planeta of resultadosP) {
    const planetaDiv = document.createElement("div");

    const titulo = document.createElement("h3");
    titulo.innerHTML = `<span style="color: yellow;">${planeta.name}</span>`;
    planetaDiv.appendChild(titulo);

    textoInicial.classList.add("texto_oculto");
    imagenes.classList.add("contenedor2-active");
    const imagen = document.createElement("img");
    imagenes.innerHTML = "";
    imagen.src = urlImagen;
    imagen.width = tamañoImagen;
    imagenes.appendChild(imagen);

    for (const residentUrl of planeta.residents) {
      try {
        const response = await fetch(residentUrl);
        const resident = await response.json();
        const residentP = document.createElement("p");
        residentP.textContent = `Nombre: ${resident.name}`;
        planetaDiv.appendChild(residentP);
      } catch (error) {
        console.error("Error al cargar el residente:", error);
      }
    }

    contenedor.appendChild(planetaDiv);
    const submenu = document.getElementById(susu);
    submenu.classList.remove("submenus-active");
    submenu.classList.add("submenus");
  }
}

// Llamados especificos de planetas -------------------------------------------------------------------------------

const specificParametersBtn =document.getElementById("specificParameters")

specificParametersBtn.addEventListener("click", function(){
  const submenusPlanetsSpecificBtn = document.querySelector(".submenusPlanetsSpecific")
  const primerSubmenu = document.querySelector(".submenus-active")
  if (submenusPlanetsSpecificBtn.classList.contains("submenusPlanetsSpecific")) {
    submenusPlanetsSpecificBtn.classList.remove("submenusPlanetsSpecific")
    submenusPlanetsSpecificBtn.classList.add("submenusPlanetsSpecific-active")
    primerSubmenu.classList.remove("submenus-active")
    primerSubmenu.classList.add("submenus")
  } else {
    submenusPlanetsSpecificBtn.classList.remove("submenusPlanetsSpecific-active")
    submenusPlanetsSpecificBtn.classList.add("submenusPlanetsSpecific")
  }
})

const minusDiameter = document.getElementById("minusDiameter")
minusDiameter.addEventListener("click", function(){
  planetasPorDiametroMenor10000(7, urlPlanets, 0, 10000, "submenuPlanetsSpecific", urlImagenPlaneti, 500)
})
const maxDiameter = document.getElementById("maxDiameter")
maxDiameter.addEventListener("click", function(){
  planetasPorDiametroMenor10000(7, urlPlanets, 10000, 20000, "submenuPlanetsSpecific", urlImagenPlaneti, 500)
})
const minusOrbit = document.getElementById("minusOrbit")
minusOrbit.addEventListener("click", function(){
  planetasPorOrbitaMenorA500(7, urlPlanets, 0, 500, "submenuPlanetsSpecific", urlImagenPlaneti, 500)
})
const maxOrbit = document.getElementById("maxOrbit")
maxOrbit.addEventListener("click", function(){
  planetasPorOrbitaMenorA500(7, urlPlanets, 500, 1500, "submenuPlanetsSpecific", urlImagenPlaneti, 500)

})

async function planetasPorOrbitaMenorA500(num, url, rango1, rango2, susu, urlImagen, tamañoImagen){
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  let resultados = [];
  for (let i = 1; i < num; i++) {
    const todoData = await peticion(url + i);
    resultados = resultados.concat(todoData.results);
  }
  const filtrados = resultados.filter(function(planeta){
    return planeta.orbital_period >= rango1 && planeta.orbital_period <= rango2;
  })

  contenedor.innerHTML = '';

  textoInicial.classList.add("texto_oculto");
    imagenes.classList.add("contenedor2-active");
    const imagen = document.createElement("img");
    imagenes.innerHTML = "";
    imagen.src = urlImagen;
    imagen.width = tamañoImagen;
    imagenes.appendChild(imagen);

  filtrados.forEach(function(planeta){
    const p = document.createElement('p');
    p.innerHTML = `Name: ${planeta.name} | Orbital period: ${planeta.orbital_period}`;
    contenedor.appendChild(p);
    
  })
  const submenu = document.getElementById(susu);
  submenu.classList.remove("submenusPlanetsSpecific-active");
  submenu.classList.add("submenusPlanetsSpecific");

}

async function planetasPorDiametroMenor10000(num, url, rango1, rango2, susu, urlImagen, tamañoImagen) {
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  let resultados = [];
  
  for (let i = 1; i < num; i++) {
    const todoData = await peticion(url + i);
    resultados = resultados.concat(todoData.results);
  }
  
  const filtrados = resultados.filter(function(planeta) {
    return planeta.diameter >= rango1 && planeta.diameter <= rango2;
  });

  contenedor.innerHTML = '';

  textoInicial.classList.add("texto_oculto");
    imagenes.classList.add("contenedor2-active");
    const imagen = document.createElement("img");
    imagenes.innerHTML = "";
    imagen.src = urlImagen;
    imagen.width = tamañoImagen;
    imagenes.appendChild(imagen);

  filtrados.forEach(function(planeta) {
    const p = document.createElement('p');
    p.innerHTML = `Name: ${planeta.name} | Diameter: ${planeta.diameter}`;
    contenedor.appendChild(p);
  });
  
  const submenu = document.getElementById(susu);
  submenu.classList.remove("submenusPlanetsSpecific-active");
  submenu.classList.add("submenusPlanetsSpecific");
}

//------------------------------------------------------------------------------------------------------------------//

btnTraerTodosLosplanetas.onclick = function () {
  verTodo(
    urlPlanets,
    urlImagenPlaneti,
    600,
    "submenuPlanets",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}`;
    },
    7
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
    },
    7
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
    },
    7
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
    },
    7
  );
};

//SUBMENU PLANETAS POR PELICULAS DE FILMS ----------------------------------------------------------------------------//

document.getElementById("verMasPlanets").addEventListener("click", function () {
  if (selectedMovie) {
    llamarPlanetasPorPeliculas(
      urlPeliculas,
      selectedMovie,
      urlImagenPlaneti,
      600
    );
  } else {
    console.log("No movie selected");
  }
});

async function llamarPlanetasPorPeliculas(
  url,
  pelicula,
  urlImagen,
  tamañoImagen
) {
  let contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  contenedor.innerHTML = "";
  try {
    const respuesta = await peticion(url);
    const respuesta2 = respuesta.results;
    const peliculasFiltradas = respuesta2.filter(
      (item) => item.title === pelicula
    );
    if (peliculasFiltradas.length > 0) {
      const urlsPlanets = peliculasFiltradas[0].planets;
      const nombresPlanetas = await obtenerNombresPlanetas(urlsPlanets);
      nombresPlanetas.forEach(function (nombre) {
        const texto = document.createElement("p");
        texto.innerHTML = `<span style="color: #c7c31c;">Planet:</span> ${nombre}`;
        contenedor.append(texto);
      });
      textoInicial.classList.add("texto_oculto");
      imagenes.classList.add("contenedor2-active");
      imagenes.innerHTML = "";
      const imagen = document.createElement("img");
      imagen.src = urlImagen;
      imagen.width = tamañoImagen;
      imagenes.appendChild(imagen);
    } else {
      console.log("Película no encontrada");
    }
  } catch (error) {
    console.error("Error al llamar a los planetas por película:", error);
  }
}

async function obtenerNombresPlanetas(urls) {
  const nombres = [];
  for (const url of urls) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      nombres.push(data.name);
    } catch (error) {
      console.error("No se pudo obtener el nombre del planeta:", error);
    }
  }
  return nombres;
}

peliculas.forEach(function (pelicula) {
  const element = document.getElementById(pelicula.id);
  element.addEventListener("click", function () {
    selectedMovie = pelicula.title;

    const submenu = document.getElementById("verMasFilms");
    submenu.classList.remove("submenusVerMas-active");
    submenu.classList.add("submenusVerMas");

    const filmCategories = document.getElementById("filmCategories");
    filmCategories.classList.remove("submenusVerMasCategories");
    filmCategories.classList.add("submenusVerMas-active");
  });
});

//---------------------------------------------------------------------------------------------------------------------//

// BOTONES DE LOS SUBMENUS VEHICULOS

const btnTraerTodosLosvehiculos = document.getElementById("allvehiculosBtn");
const btnTraerTodosLosModelos = document.getElementById("allModeloBtn");
const btnTraerTodosLosEspecificaciones = document.getElementById("allSpecsBtn");
const btnTraerTodosLosParametros = document.getElementById("allparametrosBtn");
const btnPilots = document.getElementById("fasterBtn")

btnPilots.onclick = function(){
  fasterVehicles(5, urlVehicles,"submenuVehicles",urlImagenCarrito, 600 )
}

async function fasterVehicles(num, url, susu, urlImagen, tamañoImagen){
  const contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  let resultados = [];
  
  async function peticion(url) {
    const response = await fetch(url);
    return response.json();
  }

  for (let i = 1; i <= num; i++) { 
    const todoData = await peticion(url + i);
    resultados = resultados.concat(todoData.results);
  }

  resultados.sort((a, b) => b.max_atmosphering_speed - a.max_atmosphering_speed);

  contenedor.innerHTML = '';

  resultados.forEach(function(item) {
    const p = document.createElement('p');
    p.innerHTML = `Model: ${item.model} | Speed: ${item.max_atmosphering_speed}`;
    contenedor.appendChild(p);
  });

  textoInicial.classList.add("texto_oculto");
  imagenes.classList.add("contenedor2-active");
  const imagen = document.createElement("img");
  imagenes.innerHTML = "";
  imagen.src = urlImagen;
  imagen.width = tamañoImagen;
  imagenes.appendChild(imagen);

  const submenu = document.getElementById(susu);
  submenu.classList.remove("submenus-active");
  submenu.classList.add("submenus");
}

btnTraerTodosLosvehiculos.onclick = function () {
  verTodo(
    urlVehicles,
    urlImagenCarrito,
    500,
    "submenuVehicles",
    function generarContenidoHtml(todo) {
      return `<span style="color: #c7c31c;">Name:</span> ${todo.name}`;
    },
    5
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
    },
    5
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
    },
    5
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
    },
    5
  );
};

document
  .getElementById("verMasVehicles")
  .addEventListener("click", function () {
    if (selectedMovie) {
      llamarVehiculosPorPeliculas(
        urlPeliculas,
        selectedMovie,
        urlImagenCarrito,
        600
      );
    } else {
      console.log("No movie selected");
    }
  });

async function llamarVehiculosPorPeliculas(
  url,
  pelicula,
  urlImagen,
  tamañoImagen
) {
  let contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  contenedor.innerHTML = "";
  try {
    const respuesta = await peticion(url);
    const respuesta2 = respuesta.results;
    const peliculasFiltradas = respuesta2.filter(
      (item) => item.title === pelicula
    );
    if (peliculasFiltradas.length > 0) {
      const urlsVehicles = peliculasFiltradas[0].vehicles;
      const nombresPlanetas = await obtenerNombresPlanetas(urlsVehicles);
      nombresPlanetas.forEach(function (nombre) {
        const texto = document.createElement("p");
        texto.innerHTML = `<span style="color: #c7c31c;">Vehicle:</span> ${nombre}`;
        contenedor.append(texto);
      });
      textoInicial.classList.add("texto_oculto");
      imagenes.classList.add("contenedor2-active");
      imagenes.innerHTML = "";
      const imagen = document.createElement("img");
      imagen.src = urlImagen;
      imagen.width = tamañoImagen;
      imagenes.appendChild(imagen);
    } else {
      console.log("Película no encontrada");
    }
  } catch (error) {
    console.error("Error al llamar a los planetas por película:", error);
  }
}

async function obtenerNombresPlanetas(urls) {
  const nombres = [];
  for (const url of urls) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      nombres.push(data.name);
    } catch (error) {
      console.error("No se pudo obtener el nombre del planeta:", error);
    }
  }
  return nombres;
}

peliculas.forEach(function (pelicula) {
  const element = document.getElementById(pelicula.id);
  element.addEventListener("click", function () {
    selectedMovie = pelicula.title;

    const submenu = document.getElementById("verMasFilms");
    submenu.classList.remove("submenusVerMas-active");
    submenu.classList.add("submenusVerMas");

    const filmCategories = document.getElementById("filmCategories");
    filmCategories.classList.remove("submenusVerMasCategories");
    filmCategories.classList.add("submenusVerMas-active");
  });
});

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
    },
    10
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
    },
    10
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
    },
    10
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
    },
    5
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
    },
    5
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
    },
    5
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
    },
    5
  );
};

document.getElementById("verMasSpecies").addEventListener("click", function () {
  if (selectedMovie) {
    llamarSpeciesPorPeliculas(
      urlPeliculas,
      selectedMovie,
      urlImagenEspecie,
      600
    );
  } else {
    console.log("No movie selected");
  }
});

async function llamarSpeciesPorPeliculas(
  url,
  pelicula,
  urlImagen,
  tamañoImagen
) {
  let contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  contenedor.innerHTML = "";
  try {
    const respuesta = await peticion(url);
    const respuesta2 = respuesta.results;
    const peliculasFiltradas = respuesta2.filter(
      (item) => item.title === pelicula
    );
    if (peliculasFiltradas.length > 0) {
      const urlsSpecies = peliculasFiltradas[0].species;
      const nombresPlanetas = await obtenerNombresPlanetas(urlsSpecies);
      nombresPlanetas.forEach(function (nombre) {
        const texto = document.createElement("p");
        texto.innerHTML = `<span style="color: #c7c31c;">Specie:</span> ${nombre}`;
        contenedor.append(texto);
      });
      textoInicial.classList.add("texto_oculto");
      imagenes.classList.add("contenedor2-active");
      imagenes.innerHTML = "";
      const imagen = document.createElement("img");
      imagen.src = urlImagen;
      imagen.width = tamañoImagen;
      imagenes.appendChild(imagen);
    } else {
      console.log("Película no encontrada");
    }
  } catch (error) {
    console.error("Error al llamar a los especies por película:", error);
  }
}

async function obtenerNombresPlanetas(urls) {
  const nombres = [];
  for (const url of urls) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      nombres.push(data.name);
    } catch (error) {
      console.error("No se pudo obtener el nombre de los especies:", error);
    }
  }
  return nombres;
}

peliculas.forEach(function (pelicula) {
  const element = document.getElementById(pelicula.id);
  element.addEventListener("click", function () {
    selectedMovie = pelicula.title;

    const submenu = document.getElementById("verMasFilms");
    submenu.classList.remove("submenusVerMas-active");
    submenu.classList.add("submenusVerMas");

    const filmCategories = document.getElementById("filmCategories");
    filmCategories.classList.remove("submenusVerMasCategories");
    filmCategories.classList.add("submenusVerMas-active");
  });
});

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
    },
    5
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
    },
    5
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
    },
    5
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
    },
    5
  );
};

document
  .getElementById("verMasStarships")
  .addEventListener("click", function () {
    if (selectedMovie) {
      llamarStashipsPorPeliculas(
        urlPeliculas,
        selectedMovie,
        urlImagenNavesita,
        600
      );
    } else {
      console.log("No movie selected");
    }
  });

async function llamarStashipsPorPeliculas(
  url,
  pelicula,
  urlImagen,
  tamañoImagen
) {
  let contenedor = document.querySelector(".contenedor");
  const imagenes = document.querySelector(".contenedor2");
  contenedor.innerHTML = "";
  try {
    const respuesta = await peticion(url);
    const respuesta2 = respuesta.results;
    const peliculasFiltradas = respuesta2.filter(
      (item) => item.title === pelicula
    );
    if (peliculasFiltradas.length > 0) {
      const urlsStarships = peliculasFiltradas[0].starships;
      const nombresStarships = await obtenerNombresPlanetas(urlsStarships);
      nombresStarships.forEach(function (nombre) {
        const texto = document.createElement("p");
        texto.innerHTML = `<span style="color: #c7c31c;">Starship:</span> ${nombre}`;
        contenedor.append(texto);
      });
      textoInicial.classList.add("texto_oculto");
      imagenes.classList.add("contenedor2-active");
      imagenes.innerHTML = "";
      const imagen = document.createElement("img");
      imagen.src = urlImagen;
      imagen.width = tamañoImagen;
      imagenes.appendChild(imagen);
    } else {
      console.log("Película no encontrada");
    }
  } catch (error) {
    console.error("Error al llamar a los naves por película:", error);
  }
}

async function obtenerNombresPlanetas(urls) {
  const nombres = [];
  for (const url of urls) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      nombres.push(data.name);
    } catch (error) {
      console.error("No se pudo obtener el nombre de los naves:", error);
    }
  }
  return nombres;
}

peliculas.forEach(function (pelicula) {
  const element = document.getElementById(pelicula.id);
  element.addEventListener("click", function () {
    selectedMovie = pelicula.title;

    const submenu = document.getElementById("verMasFilms");
    submenu.classList.remove("submenusVerMas-active");
    submenu.classList.add("submenusVerMas");

    const filmCategories = document.getElementById("filmCategories");
    filmCategories.classList.remove("submenusVerMasCategories");
    filmCategories.classList.add("submenusVerMas-active");
  });
});

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
  const submenuVerMas = document.getElementById("verMasFilms");
  if (
    submenuVerMas &&
    submenuVerMas.classList.contains("submenusVerMas-active")
  ) {
    submenuVerMas.classList.remove("submenusVerMas-active");
    submenuVerMas.classList.add("submenusVerMas");
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
  try {
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
  } catch (error) {
    console.log("No hay mas datos");
  }
}
async function Pelis(url, urlImagen, tamañoImagen, susu, generarContenidoHtml) {
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

