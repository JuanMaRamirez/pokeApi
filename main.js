const d = document;

let buton = d.getElementById("button");

buton.addEventListener("click", () => {
  let img = d.getElementById("img");
  let p = d.getElementById("info");
  let xhr = new XMLHttpRequest();
  let caja = d.getElementById("caja").value;

  //function fetchData(caja = "bulbasaur") {}

  xhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${caja}`);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let datoPokemon = JSON.parse(xhr.responseText);

      img.setAttribute(
        "src",
        datoPokemon.sprites.other.dream_world.front_default
      );
      p.textContent = datoPokemon.name;
    } else {
      let message = xhr.statusText || "an error has ocurrred";
      xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  };
});
