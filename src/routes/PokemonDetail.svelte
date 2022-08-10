<script>
  import {pop, replace, push} from 'svelte-spa-router';
  import {setContext, getContext} from 'svelte';
  import {fade, fly, slide} from 'svelte/transition';
  import Footer from "../components/Footer.svelte";
  import PokemonDetailCard from "../components/PokemonDetailCard.svelte";
  import {
    pokemonName,
    pokemonId,
    currentPokemon,
    currentPokemonType,
    totalPokemon,
    apiStatData,
    lastPokemonId,
    apiAbilityData,
    apiWeightData,
    apiHeightData,
    apiMoveData
  } from "../store.js";
  
  export let params = {};
  let pokeId = parseInt(params.id, 10);
  currentPokemon.set(pokeId);
  
  const getPokemon2 = async testNum => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${testNum}`)
          .then(response => response.json())
          .then(data => {
            console.log("inside PokemonDetail.svelte")
            pokemonName.set(data.name)
            pokemonId.set(data.id)
            currentPokemonType.set(data.types[0].type.name)
            apiStatData.set(data.stats)
            apiMoveData.set(data.moves)
            apiAbilityData.set(data.abilities)
            apiWeightData.set(data.weight)
            apiHeightData.set(data.height)
          }).catch(error => {
      console.log(error)
      return [];
    });
    currentPokemon.set(testNum);
  };


</script>

<!--debug lines-->
<!--<div class="dbd">-->
<!--    <h1>pokeID {$currentPokemon}</h1>-->
<!--</div>-->

<!--Main Container-->
<div class="max-w-5xl mx-auto flex justify-center text-slate-800">
  <!--  Inner Main Container  -->
  <div class="relative h-screen w-screen flex flex-col items-center dbr">
    <div class="max-w-5xl w-11/12 pt-10 mx-auto dbr">
      <h1 class="flex justify-center text-4xl text-center text-slate-700 dbr">{$pokemonName}</h1>
      <div class="flex justify-between w-full mb-2 dbr">
        
        <button class="prevButton dbr"
                on:click={() => getPokemon2($currentPokemon - 1 < 1 ? $currentPokemon : $currentPokemon - 1)}
                on:click={push(`#/pokemon/${$currentPokemon}`)}
        >
          Previous
        </button>
        <button class="nextButton dbr"
                on:click={() => getPokemon2($currentPokemon + 1 > $lastPokemonId ? $currentPokemon : $currentPokemon + 1)}
                on:click={push(`#/pokemon/${$currentPokemon}`)}>
          Next
        </button>
      </div>
    </div>
    <PokemonDetailCard pokeParamId="{pokeId}"/>
    <div class="absolute bottom-0 w-screen max-w-5xl" in:slide={{delay: 500, duration: 1000}}>
      <Footer/>
    </div>
  </div>
</div>

<style>
  
  .prevButton {
    @apply
    flex
    justify-start
    items-end
    text-xl
    text-slate-700
    font-bold
    px-0
    sm:px-4
    hover:text-white
    duration-200
    w-1/3
  }
  
  .nextButton {
    @apply
    flex
    justify-end
    items-end
    text-xl
    text-slate-700
    font-bold
    px-0
    sm:px-4
    hover:text-white
    duration-200
    w-1/3
  }

</style>