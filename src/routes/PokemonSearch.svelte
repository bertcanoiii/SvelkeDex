<script>
    import pokemonData from "../pokemonData.js";
    import PokemonSearchCard from "../components/PokemonSearchCard.svelte";

    const pokemonInitialData = pokemonData;
    let currentPage = 1;
    let pokemonPerPage = 24;
    let allPokemon = pokemonInitialData;
    let totalPokemon = pokemonInitialData.length;
    let numberOfPages = 5;
    let pageNumbers = [1, 2, 3, 4, 5];
    $: pokeRangeHigh = currentPage * pokemonPerPage;
    $: pokeRangeLow = pokeRangeHigh - pokemonPerPage;

    const setCurrentPage = newPage => {
        currentPage = newPage;
    }

    const setPageNumbersUsingPrevious = newPage => {
        pageNumbers = [];
        let startPage = 0;
        if (newPage <= 3) {
            startPage = 1;
        } else {
            startPage = (newPage - Math.floor(numberOfPages/2) + 1);
        }
        for (let i = 0; i < numberOfPages; i++){
            pageNumbers.push(startPage + i);
        }
    }

    const setPageNumbersUsingNext = newPage => {
        pageNumbers = [];
        let startPage = (newPage - Math.floor(numberOfPages/2) - 1);
        for (let i = 0; i < numberOfPages; i++){
            if (newPage <= 3) {
                pageNumbers.push(i + 1);
            } else {
                pageNumbers.push(startPage + i);
            }
        }
    }

    const setPageNumbersUsingNumbers = newPage => {
        pageNumbers = [];
        let startPage = 0;
        if (newPage <= 3) {
            startPage = 1;
        } else {
            startPage = (newPage - Math.floor(numberOfPages/2));
        }
        for (let i = 0; i < numberOfPages; i++){
            pageNumbers.push(startPage + i);
        }
    }

    function handlePageOne() {
        alert("You're already on page one d00d...")
    }


</script>

<div class="flex flex-col max-w-5xl px-5">
    <h1>Current Page:{currentPage}</h1>
    <h1 class="text-4xl text-slate-700 text-center font-bold drop-shadow-lg duration-200">This is the Pokemon page</h1>
<!--Pokemon Card Container-->
    <div class="flex flex-row flex-wrap justify-center pt-10 devBorder">
<!--    Loop for each pokemon card-->
    {#each allPokemon as pokemon, i}
        {#if i >= pokeRangeLow && i < pokeRangeHigh }
        <!--Pokemon Cards-->
            <PokemonSearchCard pokemonName="{pokemon.identifier}" pokemonId="{pokemon.id}"></PokemonSearchCard>
        {/if}
    {/each}
    </div>
<!--    Navigation Button Containers-->
    <div class="flex flex-col justify-center devBorder">
        <div class="flex flex-row justify-center space-x-5 pt-4 text-2xl text-slate-700 font-bold devBorder ">
            {#each pageNumbers as page, i}
                {#if currentPage > 0}
                    <button class="hover:-translate-y-0.5 {page === currentPage ? 'scale-150' : ''} duration-300 hover:underline"
                            on:click|preventDefault={() => setCurrentPage(page)}
                            on:click|preventDefault={() => setPageNumbersUsingNumbers(page)}
                    >
                        {page}
                    </button>
                {/if}
            {/each}
        </div>
        <div class="flex flex-row justify-between px-10 py-4 space-x-5 devBorder">
            {#if currentPage <= 1}
                <button class="flex justify-center
                       text-slate-700 font-semibold
                       rounded-lg text-lg
                       bg-blue-200 border-0 py-2 w-28
                       focus:outline-none
                       hover:bg-blue-900 hover:-translate-y-0.5 hover:text-white
                       drop-shadow-lg
                       duration-200"
                     on:click|preventDefault={handlePageOne}
                 >
                    Previous
                 </button>
            {:else if currentPage > 1}
                <button class="flex justify-center
                       text-slate-700 font-semibold
                       rounded-lg text-lg
                       bg-blue-200 border-0 py-2 w-28
                       focus:outline-none
                       hover:bg-blue-900 hover:-translate-y-0.5 hover:text-white
                       drop-shadow-lg
                       duration-200"
                on:click|preventDefault={() => setCurrentPage(currentPage - 1)}
                on:click|preventDefault={() => setPageNumbersUsingPrevious(currentPage - 1)}
                >
                    Previous
                </button>
            {/if}
            <button class="flex justify-center
                           text-slate-700 font-semibold
                           rounded-lg text-lg
                           bg-blue-200 border-0 py-2 w-28
                           focus:outline-none
                           hover:bg-blue-900 hover:-translate-y-0.5 hover:text-white
                           drop-shadow-lg
                           duration-200"
                    on:click|preventDefault={() => setCurrentPage(currentPage + 1)}
                    on:click|preventDefault={() => setPageNumbersUsingNext(currentPage + 1)}
            >
                Next
            </button>
        </div>

    </div>
</div>

