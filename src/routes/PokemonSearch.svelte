<script>
    import { fade,slide } from 'svelte/transition';
    import pokemonData from "../pokemonData.js";
    import sprites from "../sprites.js";
    import PokemonSearchCard from "../components/PokemonSearchCard.svelte";

    const spriteArray = sprites;
    const pokemonInitialData = pokemonData;
    let currentPage = 1;
    let startPageNumber = 0;
    let pokemonPerPage = 40;
    let allPokemon = pokemonInitialData;
    let totalPokemon = pokemonInitialData.length;
    let numberOfPages = 7;
    let pageNumbers = [1, 2, 3, 4, 5, 6, 7];
    $: totalPages = Math.ceil(totalPokemon/pokemonPerPage);
    $: finalPagesStartPage = totalPages - numberOfPages + 1;
    $: pokeRangeHigh = currentPage * pokemonPerPage;
    $: pokeRangeLow = pokeRangeHigh - pokemonPerPage;

    const setCurrentPage = newPage => {
        if (newPage > totalPages) {
            currentPage = totalPages;
        } else if (newPage < 1) {
            currentPage = 1;
        } else {
            currentPage = newPage;
        }

        if (newPage <= 4) {
            startPageNumber = 1;
        } else if (newPage > finalPagesStartPage) {
            startPageNumber = finalPagesStartPage;
        } else {
            startPageNumber = (newPage - Math.floor(numberOfPages/2));
        }
        pageNumbers = [];
        for (let i = 0; i < numberOfPages; i++) {
            pageNumbers.push(startPageNumber + i);
        }
    }

</script>

<!--Main Container-->
<div class="min-h-screen pt-5"
     style="background-image: url('/images/background2.png');
               background-repeat: no-repeat;
               background-position: top;
               background-size: cover;"
    in:fade={{delay: 100}}
>
    <div class="min-h-screen backdrop-blur-sm"
         in:fade={{delay: 300}}>
    <!--    Page Title-->
        <h1 class="pt-6 pageTitle">Currently Discovered Pokemon</h1>
        <!--    Navigation Button Containers-->
        <div class="flex flex-col sticky top-0 z-10 backdrop-blur-sm justify-center text-xl text-slate-700 font-bold
                    transition-transform ease-in duration-500">
            <!--        Navigation Button Container-->
            <div class="flex flex-col justify-center my-2 devBorder">
                <div class="devBorder">
                    <!--        Page Number Container-->
                    <div class="flex flex-shrink-0 justify-center devBorder">
                        {#each pageNumbers as page, i}
                            {#if currentPage > 0}
                                <button class="pageNumbers {page === currentPage ? 'text-white' : ''}"
                                        on:click|preventDefault={() => setCurrentPage(page)}
                                        on:click|preventDefault={() => document.body.scrollIntoView()}
                                >
                                    {page}
                                </button>
                            {/if}
                        {/each}
                    </div>
                </div>
                <!--    Navigation Button Containers-->
                <div class="flex flex-col justify-center">
                    <div class="flex flex-col justify-center devBorder">
                        <!--        Previous/Next Button Container-->
                        <div class="flex flex-row justify-between devBorder">
                            <!--            Previous Button(s)-->
                            <button class="w-24 navButton devBorder"
                                    on:click|preventDefault={() => setCurrentPage(currentPage - 1)}
                                    on:click|preventDefault={() => document.body.scrollIntoView()}
                            >
                                Previous
                            </button>
                            <!--            Next Button-->
                            <button class="w-24 navButton devBorder"
                                    on:click|preventDefault={() => setCurrentPage(currentPage + 1)}
                                    on:click|preventDefault={() => document.body.scrollIntoView()}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <!--Pokemon Card Container-->
        <div class="flex flex-row flex-wrap justify-center backdrop-blur-sm devBorder"
             in:fade={{delay: 500}}>
            <!--    Loop for each pokemon card-->
            {#each allPokemon as pokemon, i}
                {#if i >= pokeRangeLow && i < pokeRangeHigh }
                <!--Pokemon Cards-->
                    {#if spriteArray.includes(`${pokemon.id}.png`)}
                        <PokemonSearchCard pokePicPath="images/main_sprites/{pokemon.id}.png" pokemonName="{pokemon.identifier}"/>
                    {:else}
                        <PokemonSearchCard pokePicPath="images/main_sprites/0.png" pokemonName="{pokemon.identifier}"/>
                    {/if}
                {/if}
            {/each}
        </div>
    </div>
</div>

<style>
    .pageNumbers {
        @apply
        w-7
        sm:w-7
        hover:text-white
        duration-300
    }
</style>