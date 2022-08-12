<script>
  import {onMount} from "svelte";
  import {fade, slide} from 'svelte/transition';
  import PokemonSearchCard from "../components/PokemonSearchCard.svelte";
  import Footer from "../components/Footer.svelte";
  import {searchParamStoreTest, searchParamPokemonStoreTest} from "../store.js";
  export let params = {};
  let searchParams = params.search;
  $: searchParamStoreTest.set(searchParams);
  let testArray = [];
  
  onMount(()=> {
    for (let i = 0; i < $searchParamPokemonStoreTest.length; i++) {
      testArray.push($searchParamPokemonStoreTest[i])
    }
  });
  
</script>

<!--<div class="text-xs h-screen">-->
<!--    {#each $searchParamPokemonStoreTest as poke, i}-->
<!--      {#key searchParams}-->
<!--        <p>{i}: {poke.identifier}</p>-->
<!--      {/key}-->
<!--    {/each}-->
<!--</div>-->

<div class="">
  <div class="flex flex-col items-center backdrop-blur-[1px]"
       in:fade={{delay: 300}}>
    <div class="flex flex-col h-screen max-w-5xl">
      <!--    Page Title-->
      <div class="sticky top-0 z-10 backdrop-blur-sm">
        <h1 class="pt-11 pageTitle">Search Results for: {searchParams}</h1>
      </div>
      <div class="flex flex-col justify-center items-center w-full
                    text-lg text-slate-700 font-bold
                    transition-transform ease-in duration-500 pb-1">
        <button class="flex w-fit
                       bg-white/70 text-base rounded-md
                       pt-[1px] px-5
                       hover:bg-slate-700
                       hover:text-white
                       duration-200">
          <a href="/#/pokemon">
            Go Back
          </a>
        </button>
      </div>
      <!--Pokemon Card Container-->
      <div class="overflow-x-hidden overflow-y-auto h-screen">
        <div class="flex flex-row flex-wrap mb-5 justify-center devBorder"
             in:fade={{delay: 500}}>
          <!--    Loop for each pokemon card-->
          {#each testArray as pokemon, i }
              <!--ORIGINAL Pokemon Cards-->
              <PokemonSearchCard pokeCardPicPath="images/main_sprites/{pokemon.id}.png"
                                 pokemonCardName="{pokemon.identifier}"
                                 pokeCardId="{pokemon.id}"/>
          {/each}
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 w-screen max-w-5xl mx-auto" in:slide={{delay: 500, duration: 1000}}>
        <Footer/>
      </div>
    </div>
  </div>
</div>