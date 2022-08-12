import { writable, derived } from "svelte/store";
import pokemonData from "./pokemonData.js";

export const pokeSearchStore = writable('');
export const allPokemonStore = writable(pokemonData);
export const filteredPokemonStore = derived(
  [pokeSearchStore, allPokemonStore],
    ([$pokeSearchStore, $allPokemonStore]) => {
        return $allPokemonStore.filter(x => x.identifier.includes($pokeSearchStore))
  }
);
export const searchParamStoreTest = writable('');
export const searchParamPokemonStoreTest = derived(
  [searchParamStoreTest, allPokemonStore],
    ([$searchParamStoreTest, $allPokemonStore]) => {
        return $allPokemonStore.filter(x => x.identifier.includes($searchParamStoreTest))
  }
);

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
export const apiAbilityData = writable([]);
export const apiWeightData = writable([]);
export const apiHeightData = writable([]);

export const userSearchStore = writable();

// export const statList = derived(apiStatData, ($apiStatData) => {
//     if ($apiStatData.stats) {
//         return $apiStatData.stats.map(statObject => stat.base_stat );
//     }
//     return [];
// })


