<script>
    import { fade, fly } from 'svelte/transition';
    import { pop } from 'svelte-spa-router';
    export let pokemonData;
    import { displayCountDataStore, searchPageNumberStore, searchPageStartNumberStore } from "../store.js";
</script>

<div class="dbd">
    <p>displaycount: {$displayCountDataStore}</p>
    <p>currentpage: {$searchPageNumberStore}</p>
    <p>currentstartpage: {$searchPageStartNumberStore}</p>
</div>
<div class="max-w-3xl mx-auto flex justify-center pt-20 w-11/12 dbr" transition:fly={{x: -150}}>
    <div class="flex flex-col items-center Background">
        <button class="flex items-center justify-center hover:bg-slate-700 pt-[2px] navButton bg-white/50 rounded-xl w-1/6" on:click={() => pop()}>back</button>
        <div class="flex sm:flex-row sm:justify-between w-full dbr">
        <!--            Pic Side-->
        <div class="flex flex-col w-1/2 items-center justify-start dbr">
            <h1 class="py-2 dbr text-3xl" >{pokemonData.name}</h1>
            <div class="bg-blue-300/70 rounded-full">
                <img class="w-60" src="images/official-artwork/{pokemonData.id}.png" alt="pic of pokemon"
                     in:fade={{delay: 300, duration: 1000}}
                >
            </div>
        </div>
        <!--                left stats-->
        <div class="flex flex-col w-1/2 text-start text-m justify-start pt-5 px-5 dbr">
            <h1 class="text-2xl">Current Available Data on {pokemonData.name}</h1>
            <h1>Type: {pokemonData.types[0].type.name}</h1>
            {#each pokemonData.stats as item, i}
                <h1>{item.stat.name}: {item.base_stat}</h1>
            {/each}
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