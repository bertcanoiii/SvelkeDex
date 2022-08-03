<script>
    import pokemonData from "../pokemonData.js";
    import PokemonSearchCard from "../components/PokemonSearchCard.svelte";

    const pokemonInitialData = pokemonData;
    let currentPage = 1;
    let pokemonPerPage = 24;
    let allPokemon = pokemonInitialData;
    let totalPokemon = pokemonInitialData.length;
    let pageNumbers = 5;
    $: pokeRangeHigh = currentPage * pokemonPerPage;
    $: pokeRangeLow = pokeRangeHigh - pokemonPerPage;

    const setCurrentPage = newPage => {
        currentPage = newPage;
    }

    function handleClick() {
        alert("Clicked!")
    }


</script>

<div class="flex flex-col max-w-5xl px-5">
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
<!--        <div class="flex flex-row justify-center space-x-5 pt-4 text-xl text-slate-700 font-bold devBorder ">-->
<!--            {#each Array(pageNumbers) as page, i}-->
<!--                <button class="hover:-translate-y-0.5 duration-300 hover:underline">{i+1}</button>-->
<!--            {/each}-->
<!--        </div>-->
        <div class="flex flex-row justify-between px-10 py-4 space-x-5 devBorder">

            <button class="flex justify-center
                           text-slate-700 font-semibold
                           rounded-lg text-lg
                           bg-blue-200 border-0 py-2 w-28
                           focus:outline-none
                           hover:bg-blue-900 hover:-translate-y-0.5 hover:text-white
                           drop-shadow-lg
                           duration-200"
                    on:click|preventDefault={() => setCurrentPage(currentPage - 1)}
            >
                Previous
            </button>

            <button class="flex justify-center
                           text-slate-700 font-semibold
                           rounded-lg text-lg
                           bg-blue-200 border-0 py-2 w-28
                           focus:outline-none
                           hover:bg-blue-900 hover:-translate-y-0.5 hover:text-white
                           drop-shadow-lg
                           duration-200"
                    on:click|preventDefault={() => setCurrentPage(currentPage + 1)}
            >
                Next
            </button>
        </div>

    </div>
</div>

