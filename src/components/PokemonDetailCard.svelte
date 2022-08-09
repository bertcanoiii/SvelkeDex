<script>
    import {onMount} from "svelte";
    import {fade, fly} from 'svelte/transition';
    import {
        pokemonName,
        pokemonId,
        currentPokemonType,
        currentPokemon,
        apiStatData,
        apiMoveData,
        apiAbilityData,
        apiWeightData,
        apiHeightData
    } from "../store.js";

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
                apiAbilityData.set(data.abilities)
                apiWeightData.set(data.weight)
                apiHeightData.set(data.height)
            }).catch(error => {
            console.log(error)
            return [];
        });
        currentPokemon.set(pokeParamId);
    });

</script>

<div class="max-w-5xl mx-auto flex flex-col justify-start w-11/12 dbr overflow-x-hidden overflow-y-auto">
    <div class="flex flex-col">
        {#key $currentPokemon}
            <div class="dbr Background
                    flex flex-col justify-center w-full space-y-4"
                    in:fly={{delay: 100, x: 100}}
            >
                <!--        Pic Side-->
                <div class="flex flex-col justify-center items-center dbr">
                    <div class="group relative
                                flex justify-center items-center pt-3">
                        <div class="absolute -z-10 dbr
                                bg-blue-300 border-blue-300 border rounded-full
                                flex justify-center
                                w-8/12 h-full
                                sm:w-2/3
                                group-hover:bg-transparent
                                group-hover:border-8
                                group-hover:border-blue-600
                                group-hover:scale-90
                                transition-all
                                duration-500"
                             in:fly={{x: 200, delay: 400}}>
                        </div>
                        <img class="flex dbr
                                w-8/12
                                sm:w-2/3
                                group-hover:scale-110
                                group-hover:rotate-6
                                duration-200"
                             src="images/official-artwork/{$pokemonId}.png"
                             alt="pic of pokemon"
                             in:fly={{x: -200, delay: 800}}>
                    </div>
                </div>
<!--                Global Stat Container-->
                <div class="dbr flex flex-col w-full space-y-4 pb-10">
                    <!--        Stats 1-->
                    <div class="flex flex-row px-4 space-x-4 dbr
                                sm:px-2 sm:space-x-2 sm:justify-center"
                    >
                        <!--            Stats Table-->
                        <div class="dbr transition-all duration-100
                                    flex flex-col w-1/2
                                    border-slate-600 rounded-tl-lg
                                    border-t-2
                                    border-r
                                    hover:border-b-4
                                    hover:border-l-2
                                    hover:shadow-lg
                                    sm:w-1/3"
                             in:fade={{delay: 900}}
                        >
                            <table class="table-auto statTable">
                                <thead class="">
                                    <tr class="text-sm border-b border-slate-600">
                                        <th class="statTable border-slate-600 border-r text-right w-1/2">Stat</th>
                                        <th class="statTable text-left w-1/2">Base</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {#each $apiStatData as stat, i}
                                    <tr class="text-xs">
                                        <td class="statTableBody border-slate-600 border-r text-right">{stat.stat.name}</td>
                                        <td class="statTableBody text-left">{stat.base_stat}</td>
                                    </tr>
                                {/each}
                                </tbody>
                            </table>
                        </div>
                        <!--            Characteristics Table-->
                        <div class="dbr transition-all duration-100
                                    flex flex-col w-1/2 text-start
                                    border-slate-600 rounded-tr-lg
                                    border-t-2
                                    border-l
                                    hover:border-b-4
                                    hover:border-r-2
                                    hover:shadow-lg
                                    sm:w-1/3"
                             in:fade={{delay: 1000}}
                        >
                            <table class="table-auto statTable">
                                <thead class="">
                                    <tr class="text-sm border-b border-slate-600">
                                        <th class="statTable border-slate-600 border-r text-right w-1/2">Characteristics</th>
                                        <th class="statTable text-left w-1/2">Base</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-xs">
                                        <td class="statTableBody border-slate-600 border-r text-right">Type</td>
                                        <td class="statTableBody text-left">{$currentPokemonType}</td>
                                    </tr>
                                    <tr class="text-xs">
                                        <td class="statTableBody border-slate-600 border-r text-right">Weight</td>
                                        <td class="statTableBody text-left">{$apiWeightData}</td>
                                    </tr>
                                    <tr class="text-xs">
                                        <td class="statTableBody border-slate-600 border-r text-right">Height</td>
                                        <td class="statTableBody text-left">{$apiHeightData}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!--        Stats 2-->
                    <div class="flex flex-row px-4 space-x-4 dbr
                                sm:px-2 sm:space-x-2 sm:justify-center"
                    >
                        <!--            Abilities Table-->
                        <div class="dbr transition-all duration-100
                                    flex flex-col w-1/2 h-fit
                                    border-slate-600 rounded-bl-lg
                                    border-b-2
                                    border-r
                                    hover:border-t-4
                                    hover:border-l-2
                                    shadow-lg
                                    sm:w-1/3"
                             in:fade={{delay: 1100}}
                        >
                            <table class="table-auto statTable ">
                                <thead class="">
                                    <tr class="text-sm border-slate-600 border-b">
                                        <th class="statTable text-right">Abilities</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {#each $apiAbilityData as abilityObject, i}
                                    {#if i < 6}
                                        <tr class="text-xs">
                                            <td class="statTableBody text-right">{abilityObject.ability.name}</td>
                                        </tr>
                                    {/if}
                                {/each}
                                </tbody>
                            </table>
                        </div>
                        <!--            Moves Table-->
                        <div class="dbr transition-all duration-100
                                    flex flex-col w-1/2 h-fit
                                    border-slate-600 rounded-br-lg
                                    border-b-2
                                    border-l
                                    hover:border-t-4
                                    hover:border-r-2
                                    shadow-lg
                                    sm:w-1/3"
                             in:fade={{delay: 1200}}
                        >
                            <table class="table-auto statTable">
                                <thead class="">
                                    <tr class="text-sm border-slate-600 border-b">
                                        <th class="statTable text-left">Moves</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {#each $apiMoveData as stat, i}
                                    {#if i < 6}
                                        <tr class="text-xs">
                                            <td class="statTableBody text-left">{stat.move.name}</td>
                                        </tr>
                                    {/if}
                                {/each}
                                </tbody>
                            </table>
                        </div>
                </div>
                </div>
            </div>
        {/key}
    </div>
</div>


<style>

    .Background {
        @apply
        backdrop-blur-[3px]
        bg-blue-200/70
        py-2
        rounded-md
        drop-shadow-md
        duration-300
        transition-all
        ease-linear
    }

</style>