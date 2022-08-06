import { writable, derived } from "svelte/store";

export const pokeData = writable([]);

export const pokemonStatList = derived(pokeData, ($pokeData) => {
    if ($pokeData){
        return $pokeData;
    }
    return [];
})
