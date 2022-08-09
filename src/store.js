import { writable,derived } from "svelte/store";

export const displayCountDataStore = writable(25);
export const searchPageNumberStore = writable(1);
export const searchPageStartNumberStore = writable(0);
export const pageNumberListStore = writable([1, 2, 3, 4, 5, 6, 7]);

export const pokemonName = writable();
export const pokemonId = writable();
export const currentPokemon = writable();
export const currentPokemonType = writable();
export const totalPokemon = writable(1154);
export const lastPokemonId = writable(10249);

export const apiStatData = writable([]);
export const apiMoveData = writable([]);

// export const statList = derived(apiStatData, ($apiStatData) => {
//     if ($apiStatData.stats) {
//         return $apiStatData.stats.map(statObject => stat.base_stat );
//     }
//     return [];
// })


