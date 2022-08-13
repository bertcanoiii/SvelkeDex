<script>
  import { push } from 'svelte-spa-router';
  import PokemonDetailCard from "../components/PokemonDetailCard.svelte";
  import {
    currentPokemon,
    lastPokemonId,
    pokeApiData,
    pokemonTypes
  } from "../store.js";
  
  export let params = {};
  let pokeId = parseInt(params.id, 10);
  currentPokemon.set(pokeId);
  
  const getPokemon = async pokeNum => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`)
          .then(response => response.json())
          .then(data => {
            pokeApiData.set(data);
            pokemonTypes.set(data.types);
          }).catch(error => {
      console.log(error);
      return [];
    });
    currentPokemon.set(pokeNum);
  };

</script>

<!--Main Container-->
<div class="max-w-5xl mx-auto flex justify-center text-slate-800">
  <!--  Inner Main Container  -->
  <div class="relative h-screen w-screen flex flex-col items-center dbr">
    <div class="max-w-5xl w-11/12 pt-10 mx-auto dbr">
      <h1 class="flex justify-center text-4xl text-center text-slate-700 dbr">{$pokeApiData.name}</h1>
      <div class="flex justify-between w-full mb-2 mt-2 dbr">
        <button class="prevButton dbr"
                on:click={() => getPokemon($currentPokemon - 1 < 1 ? $currentPokemon : $currentPokemon - 1)}
                on:click={push(`#/pokemon/detail/${$currentPokemon}`)}
        >
          Previous
        </button>
        <button class="flex w-fit h-fit
                       bg-blue-100/70 text-base rounded-md
                       px-5
                       hover:bg-slate-700
                       hover:text-white
                       hover:rounded-2xl
                       transition-all
                       ease-linear
                       duration-300">
          <a href="/#/pokemon">
            Back to all!
          </a>
        </button>
        <button class="nextButton dbr"
                on:click={() => getPokemon($currentPokemon + 1 > $lastPokemonId ? $currentPokemon : $currentPokemon + 1)}
                on:click={push(`#/pokemon/detail/${$currentPokemon}`)}>
          Next
        </button>
      </div>
    </div>
    <PokemonDetailCard pokeParamId="{pokeId}"/>
  </div>
</div>

<style>
  
  .prevButton {
    @apply
    flex
    justify-start
    items-end w-20 h-fit rounded-md
    text-base
    px-0
    sm:px-4
    hover:text-white
    duration-200
  }
  
  .nextButton {
    @apply
    flex
    justify-end
    items-end w-20 h-fit rounded-md
    text-base
    px-0
    sm:px-4
    hover:text-white
    duration-200
  }

</style>
