<script>
    import { fade } from 'svelte/transition';
    import { displayCountDataStore, searchPageNumberStore, searchPageStartNumberStore, pageNumberListStore } from "../store.js";
    import pokemonData from "../pokemonData.js";
    import sprites from "../sprites.js";
    import PokemonSearchCard from "../components/PokemonSearchCard.svelte";
    import Footer from "../components/Footer.svelte";

    const spriteArray = sprites;
    const pokemonInitialData = pokemonData;
    let allPokemon = pokemonInitialData;
    let totalPokemon = pokemonInitialData.length;
    let numberOfPages = 7;
    $: totalPages = Math.ceil(totalPokemon / $displayCountDataStore);
    $: finalPagesStartPage = totalPages - numberOfPages + 1;
    $: pokeRangeHigh = $searchPageNumberStore * $displayCountDataStore;
    $: pokeRangeLow = pokeRangeHigh - $displayCountDataStore;

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
            tempNewPage = Math.ceil((totalPokemon/newDisplayCount));
            tempFinalStartPage = tempNewPage - numberOfPages + 1;
            searchPageNumberStore.set(tempNewPage)
            searchPageStartNumberStore.set(tempFinalStartPage)
            let tempNumbers = [];
            for (let i = 0; i < numberOfPages; i++) {
                tempNumbers.push($searchPageStartNumberStore + i);
                pageNumberListStore.set(tempNumbers);
            }
        }

        displayCountDataStore.set(newDisplayCount);
    }

</script>

<!--debug-->
<!--<div class="dbd">-->
<!--    <p>displaycount: {$displayCountDataStore}</p>-->
<!--    <p>currentpage: {$searchPageNumberStore}</p>-->
<!--    <p>currentstartpage: {$searchPageStartNumberStore}</p>-->
<!--    <p>pageNumbers: {$pageNumberListStore}</p>-->
<!--    <p>total pokes: {totalPokemon}</p>-->
<!--    <p>display * pages: {$displayCountDataStore * numberOfPages}</p>-->
<!--</div>-->
<!--Main Container-->
<div class="pt-5">
    <div class="flex flex-col items-center backdrop-blur-[1px]"
         in:fade={{delay: 300}}>
        <div class="flex flex-col h-screen max-w-7xl">
            <!--    Page Title-->
            <div class="sticky top-0 z-10 backdrop-blur-sm">
                <h1 class="pt-6 pageTitle">Currently Discovered Pokemon</h1>
                <!--    Navigation Button Containers-->
                <div class="flex flex-col justify-center text-xl text-slate-700 font-bold
                            transition-transform ease-in duration-500">
                    <!--        Navigation Button Container-->
                    <div class="flex flex-col justify-center my-2 devBorder">
                        <div class="devBorder">
                            <!--        Page Number Container-->
                            <div class="flex flex-shrink-0 justify-center devBorder">
                                <button class="pageNumbers {$pageNumberListStore.includes(1)? 'hidden' : ''}"
                                        on:click|preventDefault={() => setCurrentPage(1)}>
                                    1...
                                </button>
                                {#each $pageNumberListStore as page, i}
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
                        <!--    Navigation Button Containers-->
                        <div class="flex flex-col justify-center">
                            <div class="flex flex-col justify-center devBorder">
                                <!--        Previous/Next Button Container-->
                                <div class="flex flex-row justify-between devBorder">
                                    <!--            Previous Button(s)-->
                                    <button class="w-24 navButton devBorder"
                                            on:click|preventDefault={() => setCurrentPage($searchPageNumberStore - 1)}
                                    >
                                        Previous
                                    </button>
                                    <!--            Set Display Count-->
                                    <div class="displayCountContainer dbr">
                                        <div class="dbr">
                                            <h1 class="text-xs" >Display Count: </h1>
                                        </div>
                                        <div class="dbr flex flex-row">
                                            <ul class="displayNumberContainer">
                                                <li class="displayNumber {$displayCountDataStore === 10 ? 'bg-white/70' : ''}"><button on:click={() => setPokemonPerPage(10) }>10</button></li>
                                                <li class="displayNumber {$displayCountDataStore === 25 ? 'bg-white/70' : ''}"><button on:click={() => setPokemonPerPage(25) }>25</button></li>
                                                <li class="displayNumber {$displayCountDataStore === 50 ? 'bg-white/70' : ''}"><button on:click={() => setPokemonPerPage(50) }>50</button></li>
                                                <li class="displayNumber {$displayCountDataStore === 100 ? 'bg-white/70' : ''}"><button on:click={() => setPokemonPerPage(100) }>100</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!--            Next Button-->
                                    <button class="w-24 navButton devBorder" on:click|preventDefault={() => setCurrentPage($searchPageNumberStore + 1)}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Pokemon Card Container-->
            <div class="overflow-scroll h-screen">
                <div class="flex flex-row flex-wrap mb-5 justify-center devBorder"
                     in:fade={{delay: 500}}>
                    <!--    Loop for each pokemon card-->
                    {#each allPokemon as pokemon, i}
                        {#if i >= pokeRangeLow && i < pokeRangeHigh }
                            <!--Pokemon Cards-->
                            {#if spriteArray.includes(`${pokemon.id}.png`)}
                                <PokemonSearchCard pokePicPath="images/main_sprites/{pokemon.id}.png"
                                                   pokemonName="{pokemon.identifier}"
                                                   pokeId="{pokemon.id}"/>
                            {:else}
                                <PokemonSearchCard pokePicPath="images/main_sprites/0.png"
                                                   pokemonName="{pokemon.identifier}"
                                                   pokeId="{pokemon.id}"/>
                            {/if}
                        {/if}
                    {/each}
                </div>
            </div>
            <Footer/>
        </div>
    </div>
</div>

<style>
    .pageNumbers {
        @apply
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
        w-24
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