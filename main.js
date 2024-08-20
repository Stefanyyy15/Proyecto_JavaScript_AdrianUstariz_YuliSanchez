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
let urlPersonajes = "https://swapi.py4e.com/api/people";

const btnPersonajes = document.getElementById("personajesBtn");
const textoInicial = document.querySelector(".texto_inicial");

btnPersonajes.onclick = traerPersonajes;

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
