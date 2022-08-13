import { writable, derived } from "svelte/store";
import pokemonData from "./pokemonData.js";

//Stores for filtering pokemon
export const pokeSearchStore = writable('');
export const allPokemonStore = writable(pokemonData);
export const filteredPokemonStore = derived(
  [pokeSearchStore, allPokemonStore],
    ([$pokeSearchStore, $allPokemonStore]) => {
        return $allPokemonStore.filter(x => x.identifier.includes($pokeSearchStore.toLowerCase()))
  }
);


//Stores for user search parameters
export const displayCountDataStore = writable(25);
export const searchPageNumberStore = writable(1);
export const searchPageStartNumberStore = writable(0);
export const pageNumberListStore = writable([1, 2, 3, 4, 5, 6, 7]);
export const currentPokemon = writable();
export const lastPokemonId = writable(10249);

//Stores for pokemon data display
export const pokeApiData = writable([]);
export const pokemonName = derived(pokeApiData, $pokeApiData => {
    if ($pokeApiData.name) {
        return $pokeApiData.name
    }
    return 'Unknown Name';
})
export const pokemonId = derived(pokeApiData, $pokeApiData => {
    if ($pokeApiData.id) {
        return $pokeApiData.id
    }
    return 'Unknown id';
})
export const pokemonStats = derived(pokeApiData, $pokeApiData => {
    if ($pokeApiData.stats) {
        return $pokeApiData.stats
    }
    return [];
})
export const pokemonTypes = writable([]);
export const pokemonWeight = derived(pokeApiData, $pokeApiData => {
    if ($pokeApiData.weight) {
        return $pokeApiData.weight
    }
    return 'Unknown weight';
})
export const pokemonHeight = derived(pokeApiData, $pokeApiData => {
    if ($pokeApiData.height) {
        return $pokeApiData.height
    }
    return 'Unknown weight';
})
export const pokemonAbilities = derived(pokeApiData, $pokeApiData => {
    if ($pokeApiData.abilities) {
        return $pokeApiData.abilities
    }
    return [];
})
export const pokemonMoves = derived(pokeApiData, $pokeApiData => {
    if ($pokeApiData.moves) {
        return $pokeApiData.moves
    }
    return [];
})
