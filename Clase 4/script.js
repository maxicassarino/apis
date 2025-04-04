async function Pokemons() {
    const div = document.getElementById('pokemonInfo');
    div.innerHTML = ""; // Limpia los resultados anteriores

    for (let i = 0; i < 3; i++) {
        const randomId = Math.floor(Math.random() * 898) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();

        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('col');
        pokemonCard.innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
        `;
        div.appendChild(pokemonCard);
    }
}
