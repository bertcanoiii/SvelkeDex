<script>
    // import sprites from "../sprites.js"
    import { onMount } from 'svelte';
    import { pokeData, pokemonList } from "../store.js";

    onMount(async () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                pokeData.set(data);
            }).catch(error => {
            console.log(error);
            return[];
        });
    });

    function handleClick() {
        alert("Clicked!")
    }

</script>

<div class="devBorder max-w-2xl">
    <h1 class="text-2xl font-bold">This is the Pokemon page</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-10 duration-500">
    {#each $pokemonList as pokemon}
        <div class="flex flex-col items-center bg-blue-500 border-2 border-blue-900 rounded-xl py-2 space-y-2">
            <div class="flex flex-col items-center">
                <p class="font-bold">{pokemon.name}</p>
            </div>
            <div class="flex flex-row justify-center w-full items-center space-x-2 px-2">
                <p>ID:{pokemon.url.substring(34, pokemon.url.length - 1)}</p>
                <img class="flex shrink bg-blue-200 border-2 border-blue-900 rounded-xl" src="images/main_sprites/{pokemon.url.substring(34, pokemon.url.length - 1)}.png" alt="poke-pic">
            </div>
        </div>
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

