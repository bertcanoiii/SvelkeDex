<script>
    // import sprites from "../sprites.js"
    // import { onMount } from 'svelte';
    // import { pokeData, pokemonList } from "../store.js";
    //
    // onMount(async () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             pokeData.set(data);
    //         }).catch(error => {
    //         console.log(error);
    //         return[];
    //     });
    // });

    import pokemonData from "../pokemonData.js";
    import PokemonSearchCard from "../components/PokemonSearchCard.svelte";

    const pokemonInitialData = pokemonData;

    function handleClick() {
        alert("Clicked!")
    }

</script>

<div class="flex flex-col max-w-6xl px-5 devBorder">
    <h1 class="text-4xl text-slate-700 text-center sm:text-start font-bold drop-shadow-xl duration-200">This is the Pokemon page</h1>
<!--Pokemon Card Container-->
    <div class="flex flex-row flex-wrap justify-center sm:justify-start pt-10">
<!--    Loop for each pokemon card-->
    {#each pokemonInitialData as pokemon}
        <!--Pokemon Cards-->
        <PokemonSearchCard pokemonName="{pokemon.identifier}" pokemonId="{pokemon.id}"></PokemonSearchCard>
    {/each}
    </div>
    <div class="flex flex-row justify-between px-10 py-4">
        <button class="flex justify-center
                       text-white font-semibold
                       rounded-lg text-lg
                       bg-blue-700 border-0 py-2 w-28
                       focus:outline-none
                       hover:bg-blue-900 hover:-translate-y-0.5
                       duration-200"
                on:click={handleClick}
        >
            Previous
        </button>
        <button class="flex justify-center
                       text-white font-semibold
                       rounded-lg text-lg
                       bg-blue-700 border-0 py-2 w-28
                       focus:outline-none
                       hover:bg-blue-900 hover:-translate-y-0.5
                       duration-200"
                on:click={handleClick}
        >
            Next
        </button>
    </div>
</div>

