<script>
    import { onMount } from 'svelte';
    import { pokeData, pokemonList } from "../store.js";

    let nextUrl = "";
    let prevUrl = "";

    let pokemonApi = "https://pokeapi.co/api/v2/pokemon";

    onMount(async () => {
        fetch(`${pokemonApi}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                pokeData.set(data);
                nextUrl = data.next;
                prevUrl = data.previous
            }).catch(error => {
            console.log(error);
            return[];
        });
    });

    async function getNextPokemon() {
        pokemonApi = nextUrl;
        fetch(`${pokemonApi}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                pokeData.set(data);
                nextUrl = data.next;
                prevUrl = data.previous;
            }).catch(error => {
            console.log(error);
            return[];
        });
        $pokemonList = $pokemonList;
    }

    async function getPrevPokemon() {
        pokemonApi = prevUrl;
        fetch(`${pokemonApi}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                pokeData.set(data);
                nextUrl = data.next;
                prevUrl = data.previous;
            }).catch(error => {
            console.log(error);
            return[];
        });
    }

</script>

<div class="flex flex-col justify-center items-center">
    <div class="flex flex-col sm:flex-row justify-center">
        <h1 class="mt-2 text-2xl font-bold underline underline-offset-2">Search by Name</h1>
    </div>
    <div class="mt-5  h-auto justify-center duration-500">

            <ol class="grid grid-cols-3 gap-x-8 sm:gap-x-20">
                {#each $pokemonList as pokemon, i}
                    <li class="text-xs">{i}: {pokemon.name}</li>
                {/each}
            </ol>
    </div>
    <div class="flex flex-row mt-8 space-x-24 justify-center"   >
           <button class="border-2 border-black {prevUrl ? '' : 'hidden'} rounded-lg py-1 w-28 text-center" on:click={() => $pokemonList = getPrevPokemon()}>prev</button>
        {#if nextUrl}
          <button class="border-2 border-black {nextUrl ? '' : 'hidden'} rounded-lg py-1 w-28 text-center" on:click={() => $pokemonList = getNextPokemon()}>next</button>
        {/if}
    </div>
</div>