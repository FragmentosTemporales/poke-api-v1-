import './App.css';

function App() {

  const fetchPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(respuesta => respuesta.json())
    .then((data) => {
      createPokemon(data);
    });
  } 
  
  const fetchPokemons = (number) => {
    for (let i = 1; i <= number; i++){
      fetchPokemon(i);
    }

  }
   const createPokemon = (pokemon) => {
    const card = document.createElement('div');
    card.classList.add('pokemonBlock');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('imgContainer');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);
   

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    document.querySelector('.pokemonContainer').appendChild(card);

   }

fetchPokemons(9);

  return (
    <div className="App">
      <h1 className='title'>Pokedex</h1>
      <div className='pokemonContainer'>

      </div>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default App;
