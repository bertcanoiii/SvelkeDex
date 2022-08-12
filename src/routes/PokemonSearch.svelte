<script>
  import {onMount, onDestroy} from "svelte";
  import {fade, slide} from 'svelte/transition';
  import {push} from 'svelte-spa-router';
  import {
    displayCountDataStore,
    allPokemonStore,
    searchPageNumberStore,
    searchPageStartNumberStore,
    pageNumberListStore,
    filteredPokemonStore,
    pokeSearchStore,
    newPageStore
  } from "../store.js";
  import PokemonSearchCard from "../components/PokemonSearchCard.svelte";
  import Footer from "../components/Footer.svelte";
  
  let totalPokemon = $allPokemonStore.length;
  let numberOfPages = 7;
  $: totalPages = Math.ceil(totalPokemon / $displayCountDataStore);
  $: finalPagesStartPage = totalPages - numberOfPages + 1;
  $: pokeRangeHigh = $searchPageNumberStore * $displayCountDataStore;
  $: pokeRangeLow = pokeRangeHigh - $displayCountDataStore;

  //search info
  let userSearchInput = "";
  $: pokeSearchStore.set(userSearchInput);
  
  let test;
  
  const setCurrentPage = newPage => {

      if (newPage > totalPages) {
        searchPageNumberStore.set(totalPages);
      } else if (newPage < 1) {
        searchPageNumberStore.set(1);
      } else {
        searchPageNumberStore.set(newPage);
      }

      if (newPage <= 4) {
        searchPageStartNumberStore.set(1);
      } else if (newPage > finalPagesStartPage) {
        searchPageStartNumberStore.set(finalPagesStartPage);
      } else {
        searchPageStartNumberStore.set(newPage - Math.floor(numberOfPages / 2));
      }
    
    let tempNumbers = [];
    
    for (let i = 0; i < numberOfPages; i++) {
      tempNumbers.push($searchPageStartNumberStore + i);
      pageNumberListStore.set(tempNumbers);
    }
    
  }
        
  const setPokemonPerPage = newDisplayCount => {
    let tempNewPage;
    let tempFinalStartPage;
    
    if (newDisplayCount * totalPages > totalPokemon && newDisplayCount * $searchPageNumberStore > totalPokemon) {
      tempNewPage = Math.ceil((totalPokemon / newDisplayCount));
      tempFinalStartPage = tempNewPage - numberOfPages + 1;
      searchPageNumberStore.set(tempNewPage);
      searchPageStartNumberStore.set(tempFinalStartPage);
      let tempNumbers = [];
      for (let i = 0; i < numberOfPages; i++) {
        tempNumbers.push($searchPageStartNumberStore + i);
        pageNumberListStore.set(tempNumbers);
      }
    }
    
    displayCountDataStore.set(newDisplayCount);
  }
  
  const handleSubmitSearch = () => {
    push(`#/pokemon/search/${$pokeSearchStore}`);
  }
  
  onMount(()=> {
    console.log("mounted")
  })
  onDestroy(()=> {
    console.log("destroyed")
  })
  
</script>

<!--debug-->
<!--<div class="dbd text-xs">-->
<!--  <p>newPage: {test}</p>-->
<!--  <p>$newPageStore {$newPageStore}</p>-->
<!--  <p>$startNumberStore {$searchPageStartNumberStore}</p>-->
<!--  <p>totalPages {totalPages}</p>-->
<!--</div>-->

<!--Main Container-->
<div class="">
  <div class="flex flex-col items-center backdrop-blur-[1px]"
       in:fade={{delay: 300}}>
    <div class="flex flex-col h-screen max-w-5xl">
      <!--    Page Title-->
      <div class="sticky top-0 z-10 backdrop-blur-sm">
        <h1 class="pt-11 pageTitle">Currently Discovered Pokemon</h1>
        <!--    Navigation Button Containers-->
        <div class="flex flex-col justify-center w-full
                    text-xl text-slate-700 font-bold
                    transition-transform ease-in duration-500">
          <!--        Navigation Button Container-->
          <div class="flex flex-col justify-center devBorder">
            <div class="devBorder">
            <!--    Navigation Button Containers-->
            <div class="flex flex-col justify-center dbr">
              <div class="flex flex-col justify-center devBorder py-1">
                <!--        Previous/Next Button Container-->
                <div class="relative flex flex-row justify-between items-end dbr devBorder pb-1">
                  <!--            Previous Button(s)-->
                  <button class="w-1/8 navButton dbr"
                          on:click|preventDefault={() => setCurrentPage($searchPageNumberStore - 1)}
                  >
                    Previous
                  </button>
                  <!--            Search Input -->
                  <form class="flex items-center bg-white rounded-xl justify-center w-2/5 lg:w-1/3 mb-1 transition-all duration-500 dbr" on:submit|preventDefault={handleSubmitSearch}>
                    <div class="flex items-center bg-white rounded-xl justify-center w-full transition-all duration-500 dbr">
                      <input class="flex
                                    dbr
                                    w-5/6
                                    rounded-xl pl-2 pt-[2px]
                                    text-sm
                                    placeholder:text-sm
                                    placeholder:text-slate-300
                                    focus:outline-none"
                             placeholder="Search by name"
                             type="text"
                             bind:value={userSearchInput}>
                      <a class="flex h-fit mt-[1px] dbr" href="#/pokemon/search/{userSearchInput}">
                        <button class="text-xs px-2" type="submit">
                          Search!
                        </button>
                      </a>
                    </div>
                  </form>
                  <!--            Set Display Count-->
                  <div class="displayCountContainer w-1/4 pb-1 dbr">
                    <div class="dbr">
                      <h1 class="text-xs">Display Count: </h1>
                    </div>
                    <div class="dbr flex flex-row">
                      <ul class="displayNumberContainer">
                        <button on:click={() => setPokemonPerPage(10) }>
                          <li class="displayNumber {$displayCountDataStore === 10 ? 'bg-white/70' : ''}">10</li>
                        </button>
                        <button on:click={() => setPokemonPerPage(25) }>
                          <li class="displayNumber {$displayCountDataStore === 25 ? 'bg-white/70' : ''}">25</li>
                        </button>
                        <button on:click={() => setPokemonPerPage(50) }>
                          <li class="displayNumber {$displayCountDataStore === 50 ? 'bg-white/70' : ''}">50</li>
                        </button>
                        <button on:click={() => setPokemonPerPage(100) }>
                          <li class="displayNumber {$displayCountDataStore === 100 ? 'bg-white/70' : ''}">100</li>
                        </button>
                      </ul>
                    </div>
                  </div>
                  <!--            Next Button-->
                  <button class="w-1/8 navButton devBorder dbr"
                          on:click|preventDefault={() => setCurrentPage($searchPageNumberStore + 1)}>
                    Next
                  </button>
                </div>
              </div>
            </div>
            <!--        Page Number Container-->
            {#if !userSearchInput}
              <div class="flex justify-center mb-2 dbr devBorder">
                <div class="flex justify-between max-w-sm w-10/12 dbr">
                  <button class="pageNumbers {$pageNumberListStore.includes(1)? 'hidden' : ''}"
                          on:click|preventDefault={() => setCurrentPage(1)}>
                    1...
                  </button>
                  {#each $pageNumberListStore as page, i }
                    {#if $searchPageNumberStore > 0}
                      <button class="pageNumbers {page === $searchPageNumberStore ? 'text-white' : ''}"
                              on:click|preventDefault={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    {/if}
                  {/each}
                  <button class="pageNumbers {$pageNumberListStore.includes(totalPages)? 'hidden' : ''}"
                          on:click|preventDefault={() => setCurrentPage(totalPages)}>
                    ...{totalPages}
                  </button>
                </div>
              </div>
            {/if}
            </div>
          </div>
        </div>
      </div>
      <!--Pokemon Card Container-->
      <div class="overflow-x-hidden overflow-y-auto h-screen">
        <div class="flex flex-row flex-wrap mb-5 justify-center devBorder"
             in:fade={{delay: 500}}>
          <!--    Loop for each pokemon card-->
          {#if $pokeSearchStore}
            {#each $filteredPokemonStore as pokemon, i }
                <PokemonSearchCard pokeCardPicPath="images/main_sprites/{pokemon.id}.png"
                                   pokemonCardName="{pokemon.identifier}"
                                   pokeCardId="{pokemon.id}"/>
            {/each}
          {:else}
            {#each $allPokemonStore as pokemon, i }
              {#if i >= pokeRangeLow && i < pokeRangeHigh }
                <!--ORIGINAL Pokemon Cards-->
                <PokemonSearchCard pokeCardPicPath="images/main_sprites/{pokemon.id}.png"
                                   pokemonCardName="{pokemon.identifier}"
                                   pokeCardId="{pokemon.id}"/>
              {/if}
            {/each}
          {/if}
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 w-screen max-w-5xl mx-auto" in:slide={{delay: 500, duration: 1000}}>
        <Footer/>
      </div>
    </div>
  </div>
</div>

<style>
  .pageNumbers {
    @apply
    text-sm
    sm:text-lg
    w-6
    sm:w-7
    hover:text-white
    duration-300
  }
  
  .displayCountContainer {
    @apply
    flex
    flex-col
    justify-between
    items-center
  }
  
  .displayNumberContainer {
    @apply
    grid
    grid-cols-4
    text-xs
    w-20
    sm:text-base
    sm:w-24
    grid
  }
  
  .displayNumber {
    @apply
    text-xs
    text-center
    border-slate-700
    border-2
    rounded-sm
    hover:border-white
    hover:text-white
    duration-300
  }
</style>
