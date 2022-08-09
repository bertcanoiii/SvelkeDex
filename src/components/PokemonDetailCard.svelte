<script>
    import { onMount} from "svelte";
    import { fade, fly } from 'svelte/transition';
    import {pokemonName, pokemonId, currentPokemonType, currentPokemon, apiStatData, apiMoveData} from "../store.js";

    export let pokeParamId;

    onMount(async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeParamId}`)
            .then(response => response.json())
            .then(data => {
                console.log("inside searchCard")
                pokemonName.set(data.name)
                pokemonId.set(data.id)
                currentPokemonType.set(data.types[0].type.name)
                apiStatData.set(data.stats)
                apiMoveData.set(data.moves)
            }).catch(error => {
            console.log(error)
            return [];
        });
        currentPokemon.set(pokeParamId);
    });

</script>

<div class="max-w-5xl mx-auto flex flex-col justify-start h-screen w-11/12 dbr">

    <div class="flex flex-col">
        {#key $currentPokemon}
        <div class="flex sm:flex-row sm:justify-between w-full h-full dbr Background" in:fly={{delay: 100, x: 20}}>
            <!--            Pic Side-->
            <div class="group flex flex-col w-1/2 items-center dbr" >
                <h1 class="dbr text-center w-full text-3xl" in:fade={{delay: 400}}>{$pokemonName}</h1>
                <div class="relative flex justify-center items-center">
                    <div class="flex justify-center bg-blue-300 w-9/12 h-full absolute -z-10 border-blue-300 border rounded-full dbr group-hover:bg-transparent group-hover:border-8 group-hover:border-blue-600 transition-all duration-500"></div>
                    <img class="flex w-9/12 dbr group-hover:scale-105 group-hover:rotate-3 duration-500 " src="images/official-artwork/{$pokemonId}.png" alt="pic of pokemon"
                    in:fly={{x: -200, delay: 600}}>
                </div>
            </div>
            <!--                left stats-->
            <div class="flex flex-row w-1/2 items-center dbr">
                <div class="flex flex-col w-1/2 text-start text-sm justify-start px-5 dbr transition-all duration-500"
                    in:fade={{delay: 250}}
                >
                    <h1 in:fade={{delay: 450}}>Type: {$currentPokemonType}</h1>
                    <h2 class="underline" in:fade={{delay: 450}}>Stats</h2>
                    <ul class="list-disc" in:fade={{delay: 550}}>
                        {#each $apiStatData as stat, i}
                            <li class="">{stat.stat.name}: {stat.base_stat}</li>
                        {/each}
                    </ul>

                </div>
                <!--                    right stats-->
                <div class="flex flex-col w-1/2 text-start text-sm justify-start px-5 dbr transition-all duration-500">
                    <h2 class="underline" in:fade={{delay: 650}}>Moves</h2>
                    <ul class="list-disc" in:fade={{delay: 650}}>
                        {#each $apiMoveData as stat, i}
                            {#if i < 5}
                                <li>{stat.move.name}</li>
                            {/if}
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
        {/key}
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