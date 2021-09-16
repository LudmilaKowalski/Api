let setPokemon = () => {
 let data;   
 let pokemon = document.getElementById("pokemon").value;
 let url =`https://pokeapi.co/api/v2/pokemon/${pokemon}`;

 axios.get(url)
    .then(response => {
        data = response.data;
    
    setPokemonImages(data);
    setPokemonName(data);
    setPokemonStats(data);
    })
}
 let setPokemonName = (data) => {
    let pokemonName = document.getElementById("pokemonName");
    pokemonName.innerHTML ="Name"+ " : " + data.name;

 }

 let setPokemonStats = (data) => {
    let pokemonStats = document.getElementById("pokemonStats");
    let temp = data.stats;
    
    pokemonStats.innerHTML = "";
    for (let a = 0; a < temp.length; a++) {
        
        pokemonStats.innerHTML +=`${temp[a].stat.name} : ${temp[a].base_stat} <br>`;
    }
 }

 let setPokemonImages = (data) => {
     let setPokemonImageFront = document.getElementById("pokemonImageFront");

     setPokemonImageFront.src = data.sprites.front_default;
}

document.getElementById("validation").addEventListener("click",(e) => {
    e.preventDefault();

    setPokemon();
})