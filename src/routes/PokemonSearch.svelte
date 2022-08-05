<script>
    import pokemonData from "../pokemonData.js";
    import sprites from "../sprites.js";
    import PokemonSearchCard from "../components/PokemonSearchCard.svelte";

    const spriteArray = sprites;

    const pokemonInitialData = pokemonData;
    let currentPage = 1;
    let startPageNumber = 0;
    let pokemonPerPage = 24;
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

    function handlePageOne() {
        alert("You're already on page one d00d...")
    }


</script>

<!--<h1>Current Page:{currentPage}</h1>-->
<!--<h1>Total Pokemon:{totalPokemon}</h1>-->
<!--<h1>Total Pages:{totalPages}</h1>-->
<!--<h1>Final Page Start Page:{finalPagesStartPage}</h1>-->
<div class="sticky top-0 z-10 backdrop-blur-md sm:hidden text-xl text-slate-700 font-bold border-b-slate-300 border">
        <div class="devBorder">
            <!--        Previous/Next Button Container-->
            <div class="flex flex-row w-screen px-10 justify-between devBorder">
                <!--            Previous Button(s)-->
                <button class="navButton devBorder"
                        on:click|preventDefault={() => setCurrentPage(currentPage - 1)}
                >
                    Previous
                </button>
                <!--            Next Button-->
                <button class="navButton devBorder"
                        on:click|preventDefault={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
</div>
<div class="flex flex-col max-w-5xl space-y-6 px-5">
    <h1 class="text-4xl text-slate-700 text-center font-bold drop-shadow-lg duration-200">This is the Pokemon page</h1>
    <!--    Navigation Button Containers-->
    <div class="flex flex-col justify-center text-xl text-slate-700 font-bold">
        <div class="flex flex-col justify-center mt-4 devBorder">
            <!--        Previous/Next Button Container-->
            <div class="navButtonContainer devBorder">

                <!--        Page Number Container-->
                <div class="flex flex-wrap justify-center devBorder">
                        {#each pageNumbers as page, i}
                            {#if currentPage > 0}
                                <button class="pageNumbers {page === currentPage ? 'text-red-900' : ''}"
                                        on:click|preventDefault={() => setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            {/if}
                        {/each}
                </div>
            </div>
            <!--    Navigation Button Containers-->
            <div class="flex flex-col justify-center text-xl text-slate-700 font-bold">
                <div class="flex flex-col justify-center mt-4 devBorder">
                    <!--        Previous/Next Button Container-->
                    <div class="flex flex-row justify-between px-10 devBorder">
                        <!--            Previous Button(s)-->
                        <button class="w-10 navButton"
                                on:click|preventDefault={() => setCurrentPage(currentPage - 1)}
                        >
                            Previous
                        </button>
                        <!--            Next Button-->
                        <button class="w-10 navButton"
                                on:click|preventDefault={() => setCurrentPage(currentPage + 1)}
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
    <!--    Navigation Button Containers-->
    <div class="flex flex-col justify-center text-xl text-slate-700 font-bold">
        <div class="flex flex-col justify-center mt-4 devBorder">
            <!--        Previous/Next Button Container-->
            <div class="flex flex-row justify-between px-10 devBorder">
                <!--            Previous Button(s)-->
                <button class="w-10 navButton"
                        on:click|preventDefault={() => setCurrentPage(currentPage - 1)}
                >
                    Previous
                </button>
                <!--            Next Button-->
                <button class="w-10 navButton"
                        on:click|preventDefault={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    </div>

</div>

<style>
    /*.navButtonContainer {*/
    /*    @apply*/
    /*    flex*/
    /*    flex-row*/
    /*    max-w-fit*/
    /*    mx-auto*/
    /*    space-x-0*/
    /*    sm:space-x-5*/
    /*    pt-2*/
    /*    pb-1*/
    /*}*/

    .navButton {
        @apply
        px-0
        sm:px-4
        hover:text-amber-700
        duration-500
    }

    .pageNumbers {
        @apply
        w-7
        sm:w-7
        hover:text-amber-700
        duration-500
    }
</style>
