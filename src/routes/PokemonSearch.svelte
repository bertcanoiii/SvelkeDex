<script>
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

<!--<h1 class="sticky top-10 z-20" >Current yPosition:{yPosition}</h1>-->
<!--<h1 class="sticky top-20 z-20" >Current showGlass:{showGlass}</h1>-->
<!--<h1>Total Pokemon:{totalPokemon}</h1>-->
<!--<h1>Total Pages:{totalPages}</h1>-->
<!--<h1>Final Page Start Page:{finalPagesStartPage}</h1>-->
<!--Glass Nav Button Container-->

<!--Main Container-->
<div class="max-w-5xl px-0">
<!--    Page Title-->
    <h1 class="pageTitle">Currently Discovered Pokemon</h1>
    <!--    Navigation Button Containers-->
    <div class="flex flex-col sticky top-0 z-10 backdrop-blur-sm border-b border-slate-200 justify-center text-xl text-slate-700 font-bold
                transition-transform ease-in duration-500">
        <!--        Navigation Button Container-->
        <div class="flex flex-col justify-center my-2 devBorder">
            <div class="devBorder">
                <!--        Page Number Container-->
                <div class="flex flex-shrink-0 justify-center devBorder">
                    {#each pageNumbers as page, i}
                        {#if currentPage > 0}
                            <button class="pageNumbers {page === currentPage ? 'text-red-900' : ''}"
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
    <div class="flex flex-row flex-wrap justify-center devBorder">
<!--    Loop for each pokemon card-->
    {#each allPokemon as pokemon, i}
        {#if i >= pokeRangeLow && i < pokeRangeHigh }
        <!--Pokemon Cards-->
            {#if spriteArray.includes(`${pokemon.id}.png`)}
                <PokemonSearchCard pokePicPath="images/main_sprites/{pokemon.id}.png" pokemonName="{pokemon.identifier}"></PokemonSearchCard>
            {:else}
                <PokemonSearchCard pokePicPath="images/main_sprites/0.png" pokemonName="{pokemon.identifier}"></PokemonSearchCard>
            {/if}
        {/if}
    {/each}
    </div>
</div>

<style>
    .pageNumbers {
        @apply
        w-7
        sm:w-7
        hover:text-amber-700
        duration-500
    }
</style>