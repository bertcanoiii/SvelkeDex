import { writable, derived } from "svelte/store";

export const pokeData = writable([]);

export const pokemonList = derived(pokeData, ($pokeData) => {
    if ($pokeData.results){
        return $pokeData.results.map(poke => poke);
    }
    return [];
})
