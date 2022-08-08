<script>
    import { onMount} from "svelte";
    import { fade, fly } from 'svelte/transition';
    import { pop } from 'svelte-spa-router';
    import {pokemonName, pokemonId, currentPokemonType, currentPokemon} from "../store.js";

    // export let pokemonData;
    export let pokeParamId;

    onMount(async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeParamId}`)
            .then(response => response.json())
            .then(data => {
                console.log("inside searchCard")
                pokemonName.set(data.name)
                pokemonId.set(data.id)
                currentPokemonType.set(data.types[0].type.name)
            }).catch(error => {
            console.log(error)
            return [];
        });
        currentPokemon.set(pokeParamId);
    });

</script>

<div class="max-w-3xl mx-auto flex flex-col justify-start h-screen w-11/12 dbr" transition:fly={{x: -150}}>
    <div class="flex flex-col Background">
        <div class="flex sm:flex-row sm:justify-between w-full h-full dbr">
            <!--            Pic Side-->
            <div class="group flex flex-col w-1/2 items-center dbr">
                <h1 class="dbr text-center w-full text-3xl" >{$pokemonName}</h1>
                <div class="relative flex justify-center items-center">
                    <div class="flex justify-center bg-blue-300 w-9/12 h-full absolute -z-10 border-blue-300 border rounded-full dbr group-hover:bg-transparent group-hover:border-8 group-hover:border-blue-600 transition-all duration-500  "></div>
                    <img class="flex w-9/12 dbr group-hover:scale-105 group-hover:rotate-3 duration-500 " src="images/official-artwork/{$pokemonId}.png" alt="pic of pokemon" in:fade={{delay: 300, duration: 1000}}>
                </div>
            </div>
            <!--                left stats-->
            <div class="flex flex-col w-1/2 text-start text-m justify-start sm:pt-20 px-5 dbr transition-all duration-500">
                <h1 class="text-2xl">Current Available Data on {$pokemonName}</h1>
                <h1>Type: {$currentPokemonType}</h1>
                <h1>Still working on stuff! </h1>
            </div>
            <!--                    right stats-->
        </div>
    </div>
</div>

<style>

    .Background {
        @apply
        bg-blue-100/70
        py-2
        rounded-md
        drop-shadow-md
        duration-300
        transition-all
        ease-linear
    }

</style>