<script>
  import { fade } from 'svelte/transition';
  import PokemonSearchCard from "../components/PokemonSearchCard.svelte";
  import pokemonData from "../pokemonData.js";
  
  export let params = {};
  let searchParams = params.search;
  let pokeSearchArray = [];
  
  for (let i = 0; i < pokemonData.length; i++) {
    for (let j = 0; j < (pokemonData[i].identifier.length - searchParams.length); j++) {
      let tempString = "";
      for (let k = 0; k < searchParams.length; k++){
        tempString += pokemonData[i].identifier[j+k]
      }
      if (tempString === searchParams) {
        let tempObject = {
          'id': pokemonData[i].id,
          'identifier': pokemonData[i].identifier
        }
        pokeSearchArray.push(tempObject);
        console.log(`${tempString} is inside ${pokemonData[i].identifier}`)
      }
    }
  }
  
  for (let i = 0; i < pokeSearchArray.length; i++ ) {
    console.log(pokeSearchArray[i].id)
    console.log(pokeSearchArray[i].identifier)
  }
  
</script>

<div class="">
  <div class="flex flex-col items-center backdrop-blur-[1px]"
       in:fade={{delay: 300}}>
    <div class="flex flex-col h-screen max-w-5xl">
      <!--    Page Title-->
      <div class="sticky top-0 z-10 backdrop-blur-sm">
        <h1 class="pt-11 pageTitle">Search Results for: {searchParams}</h1>
      </div>
      <!--      Back button-->
      <div class="flex flex-col justify-center items-center w-full
                    text-lg text-slate-700 font-bold
                    transition-transform ease-in duration-500 pb-1 my-1">
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
      </div>
      <!--Pokemon Card Container-->
      <div class="overflow-x-hidden overflow-y-auto h-screen">
        <div class="flex flex-row flex-wrap text-xs mb-10 justify-center devBorder"
             in:fade={{delay: 500}}>
          <!--    Loop for each pokemon card-->
          <div class="flex flex-col">
            <p>Search Param Test: {searchParams}</p>
            <p>Search Param Test: {searchParams.length}</p>
            <p>///hardForLoopTest - array of strings, not using .includes///</p>
            {#each pokeSearchArray as pokemon, i}
                <div class="flex flex-col">
                  <p>{pokemon.id}: {pokemon.identifier}</p>
                </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!--ORIGINAL Pokemon Cards-->
<!--            <PokemonSearchCard pokeCardPicPath="images/main_sprites/{pokemon.id}.png"-->
<!--                               pokemonCardName="{pokemon.identifier}"-->
<!--                               pokeCardId="{pokemon.id}"/>-->