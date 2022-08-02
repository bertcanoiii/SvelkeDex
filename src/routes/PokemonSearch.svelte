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

<div class="flex flex-col max-w-6xl px-5 devBorder">
    <h1 class="text-4xl text-slate-700 text-center sm:text-start font-bold drop-shadow-xl duration-200">This is the Pokemon page</h1>
<!--Pokemon Card Container-->
    <div class="flex flex-row flex-wrap justify-center sm:justify-start sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 justify-items-center pt-10">
<!--    Loop for each pokemon card-->
    {#each $pokemonList as pokemon}
        <!--Pokemon Cards-->
        <div class="flex">
            <div class="flex flex-col items-center bg-blue-100 rounded-xl py-2 space-y-2 drop-shadow-xl">
    <!--            Pokemon Card Top-->
                <div class="flex flex-col items-center">
                    <h3 class="text-lg sm:text-xl md:text-2xl text font-bold text-slate-700 duration-500">{pokemon.name}</h3>
                </div>
    <!--            Pokemon Card Body-->
                <div class="flex flex-row justify-center items-center space-x-2 px-2">
<!--                    <p class="text-slate-700 font-bold">ID:{pokemon.url.substring(34, pokemon.url.length - 1)}</p>-->
                    <img class="flex shrink bg-blue-200 rounded-xl drop-shadow-md" src="images/main_sprites/{pokemon.url.substring(34, pokemon.url.length - 1)}.png" alt="poke-pic">
                </div>
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

