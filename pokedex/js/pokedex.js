const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((respuesta) => {
        if (respuesta.status != "200") {
            console.log(respuesta);
            pkmnImage("./img/pokemon_sad.gif")
        }
        else {
            return respuesta.json();
        }
    }).then((data) => {
        console.log(data);
        let pkmnImg = data.sprites.front_default;
        let pkmnTypes = data.types;
        let pkmnStats = data.stats;
        let pkmnMoves = data.moves;
        // console.log(pkmnTypes);
        pkmnImage (pkmnImg);
        pkmnTipos (pkmnTypes);
        pkmnstats (pkmnStats);
        pkmnmoves (pkmnMoves);
        // console.log(pkmnImg);
    });
}

const pkmnImage = (url) =>{
    const pkmnImg = document.getElementById("pkmnImg");
    pkmnImg.src=url;
}
const pkmnTipos = (types) =>{
    var  typeList, typeElement;
    pkdx = document.getElementById("pkmn_tipos");
    typeList = document.createElement("ul");
    typeList.setAttribute("id", "types");
    typeList.classList.add("tipos");
    let clean = document.getElementById("types");
    if(clean !=null){
        clean.remove();
    }
    for(j in types){
        typeElement = document.createElement("li");
        typeElement.innerHTML = types[j].type.name;
        typeList.appendChild(typeElement);
        pkdx.appendChild(typeList);
    }
}
const pkmnstats = (stats) =>{
    var eleList, p, lista, pkdx;
    let clean = document.getElementById("stats");
    pkdx = document.getElementById("pkmn_stats");
    lista = document.createElement("ul");
    if(clean != null){
        clean.remove();
    }
    pkdx = document.getElementById("pkmn_stats");
    lista = document.createElement("ul");
    lista.setAttribute("id","stats");
    lista.classList.add("estadisticas");
    for(j in stats){
        eleList = document.createElement("li");
        eleList.innerHTML = stats[j].stat.name + ": "+ stats[j].base_stat;
        lista.appendChild(eleList);
        pkdx.appendChild(lista);
    }
}

const pkmnmoves = (moves) =>{
    var moveList, moveElement, pkdx;
    pkdx = document.getElementById("pkmn_moves");
    moveList = document.createElement ("select");
    moveList.setAttribute("id", "moves");
    let clean = document.getElementById("moves");
    if(clean != null){
        clean.remove();
    }
    for(j in moves){
        moveElement = document.createElement("option");
        moveElement.innerHTML = moves[j].move.name
        moveList.appendChild(moveElement);
        pkdx.appendChild(moveList);
    }
}

