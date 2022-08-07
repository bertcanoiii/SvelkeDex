import { writable, derived } from "svelte/store";

export const pokeData = writable([]);

export const displayCountDataStore = writable(25);
export const searchPageNumberStore = writable(1);
export const searchPageStartNumberStore = writable(0);
export const pageNumberListStore = writable([1, 2, 3, 4, 5, 6, 7]);

export const pokemonStatList = derived(pokeData, ($pokeData) => {
    if ($pokeData){
        return $pokeData;
    }
    return [];
})

