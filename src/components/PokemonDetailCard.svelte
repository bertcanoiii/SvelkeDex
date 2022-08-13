<script>
  import {onMount} from "svelte";
  import {fly} from 'svelte/transition';
  import {
    currentPokemon,
    pokeApiData,
    pokemonId,
    pokemonStats,
    pokemonTypes,
    pokemonHeight,
    pokemonWeight,
    pokemonAbilities,
    pokemonMoves
  } from "../store.js";
  
  export let pokeParamId;
  
  onMount(async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeParamId}`)
          .then(response => response.json())
          .then(data => {
            pokeApiData.set(data);
            pokemonTypes.set(data.types)
          }).catch(error => {
      console.log(error);
      return [];
    });
  });
  
</script>

<div class="max-w-5xl mx-auto flex flex-col justify-start w-11/12 dbr overflow-x-hidden overflow-y-auto">
  <div class="flex flex-col">
    {#key $currentPokemon}
      <div class="relative dbr Background z-0
                  flex flex-col justify-center w-full space-y-4"
           in:fly={{x: -50}}
      >
        <!--        Pic-->
        <div class="flex flex-col justify-center items-center dbr">
          <div class="group relative
                      flex justify-center items-center pt-3">
            <div class="absolute -z-10 dbr
                        bg-blue-400/90 border-blue-300 border rounded-full
                        drop-shadow-lg
                        flex justify-center
                        w-8/12 h-full
                        sm:w-2/3
                        group-hover:bg-transparent
                        group-hover:border-8
                        group-hover:border-blue-600
                        group-hover:scale-90
                        transition-all
                        duration-500"
                 in:fly={{x: -50, delay: 600}}>
            </div>
            <img class="flex dbr
                          w-8/12
                          sm:w-2/3
                          drop-shadow-lg
                          group-hover:scale-110
                          group-hover:rotate-6
                          duration-200 text-center"
                 src="images/official-artwork/{$pokemonId}.png"
                 alt="no pic of this pokemon exists yet!"
                 in:fly={{x: -50, delay: 800}}
            >
          </div>
        </div>
        <!--                Global Stat Container-->
        <div class="dbr flex flex-col w-full space-y-4 pb-10">
          <!--        Stats 1-->
          <div class="flex flex-row px-4 space-x-4 dbr
                                sm:px-2 sm:space-x-2 sm:justify-center"
               in:fly={{x: -50, delay: 500}}
          >
            <!--            Stats Table-->
            <div class="dbr transition-all duration-100
                        flex flex-col w-1/2
                        border-slate-600 rounded-tl-lg
                        border-t-2
                        border-r
                        hover:border-b-4
                        hover:border-l-2
                        hover:shadow-lg
                        sm:w-1/3"
            >
              <table class="table-auto ">
                <thead class="">
                <tr class="text-lg border-b border-slate-600">
                  <th class="border-slate-600 border-r
                             text-right w-2/3 pr-2">Stat
                  </th>
                  <th class="text-left w-1/3 pl-2">Base</th>
                </tr>
                </thead>
                <tbody>
                {#each $pokemonStats as stats}
                  <tr class="text-sm">
                    <td class="border-slate-600 border-r text-right pr-2">{stats.stat.name}</td>
                    <td class="text-left pl-2">{stats.base_stat}</td>
                  </tr>
                {/each}
                </tbody>
              </table>
            </div>
            <!--            Characteristics Table-->
            <div class="dbr transition-all duration-100
                        flex flex-col w-1/2 text-start
                        border-slate-600 rounded-tr-lg
                        border-t-2
                        border-l
                        hover:border-b-4
                        hover:border-r-2
                        hover:shadow-lg
                        sm:w-1/3"
            >
              <table class="table-auto">
                <thead class="">
                <tr class="text-lg border-b border-slate-600">
                  <th class="border-slate-600 border-r text-right w-1/3 px-2">Traits</th>
                  <th class="text-left w-2/3 pl-2">Base</th>
                </tr>
                </thead>
                <tbody>
                {#each $pokemonTypes as types, i}
                  <tr class="text-sm">
                    <td class="border-slate-600 border-r text-right pr-2">{$pokemonTypes.length === 1 ? "Type": `Type ${i+1}`}:</td>
                    <td class=" text-left pl-2">{types.type.name}</td>
                  </tr>
                {/each}
                <tr class="text-sm">
                  <td class="border-slate-600 border-r text-right pr-2">Weight</td>
                  <td class="text-left pl-2">{$pokemonWeight}</td>
                </tr>
                <tr class="text-sm">
                  <td class="border-slate-600 border-r text-right pr-2">Height</td>
                  <td class="text-left pl-2">{$pokemonHeight}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--        Stats 2-->
          <div class="flex flex-row px-4 space-x-4 dbr
                      sm:px-2 sm:space-x-2 sm:justify-center"
               in:fly={{x: -50, delay: 300}}
          >
            <!--            Abilities Table-->
            <div class="dbr transition-all duration-100
                        flex flex-col w-1/2 h-fit
                        border-slate-600 rounded-bl-lg
                        border-b-2
                        border-r
                        hover:border-t-4
                        hover:border-l-2
                        shadow-lg
                        sm:w-1/3"
            >
              <table class="table-auto">
                <thead class="">
                <tr class="text-lg border-slate-600 border-b">
                  <th class="text-right pr-2">Abilities</th>
                </tr>
                </thead>
                <tbody>
                {#each $pokemonAbilities as abilityObject, i}
                  {#if i < 6}
                    <tr class="text-s">
                      <td class="text-right pr-2">{abilityObject.ability.name}</td>
                    </tr>
                  {/if}
                {/each}
                </tbody>
              </table>
            </div>
            <!--            Moves Table-->
            <div class="dbr transition-all duration-100
                        flex flex-col w-1/2 h-fit
                        border-slate-600 rounded-br-lg
                        border-b-2
                        border-l
                        hover:border-t-4
                        hover:border-r-2
                        shadow-lg
                        sm:w-1/3"
            >
              <table class="table-auto">
                <thead class="">
                <tr class="text-lg font-bold border-slate-600 border-b">
                  <th class="text-left pl-2">Moves</th>
                </tr>
                </thead>
                <tbody>
                {#each $pokemonMoves as stat, i}
                  {#if i < 6}
                    <tr class="text-s">
                      <td class="text-left pl-2">{stat.move.name}</td>
                    </tr>
                  {/if}
                {/each}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    {/key}
  </div>
</div>


<style>
  
  .Background {
    @apply
    bg-blue-200/70
    py-2
    rounded-md
    duration-300
    transition-all
    ease-linear
  }

</style>