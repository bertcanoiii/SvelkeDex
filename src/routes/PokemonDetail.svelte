<script>
    import {fade, fly, slide} from 'svelte/transition';
    import Footer from "../components/Footer.svelte";

    export let params = {};

    const pokeId = parseInt(params.id, 10);
    $: previousPokemon = pokeId - 1;
    $: nextPokemon = pokeId + 1;

    const getPokemon = async () => {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        return await response.json();
    }

    let pokePromise = getPokemon();

</script>

<!--<div class="absRef text-sm">-->
<!--    <h1>pokeID {pokeId}</h1>-->
<!--</div>-->
<!--Main Container-->
<div class="max-w-7xl mx-auto flex justify-center text-slate-800">
<!--  Inner Main Container  -->
    <div class="h-screen w-screen flex flex-col items-center pt-14">
        {#await pokePromise then pokeData}
            <div class="max-w-3xl mx-auto flex justify-center pt-20 w-11/12 dbr" transition:fly={{x: -150}}>
            <div class="flex sm:flex-row sm:justify-between w-full dbr Background ">
                <!--            Pic Side-->
                <div class="flex flex-col w-1/2 items-center justify-start dbr">
                    <h1 class="py-2 dbr text-3xl" >{pokeData.name}</h1>
                    <div class="bg-blue-300/70 rounded-full">
                        <img class="w-60" src="images/official-artwork/{pokeData.id}.png" alt="pic of pokemon"
                             in:fade={{delay: 300, duration: 1000}}
                        >
                    </div>
                </div>
                <!--                left stats-->
                <div class="flex flex-col w-1/2 text-start text-m justify-start pt-5 px-5 dbr">
                    <h1 class="text-2xl">Current Available Data on {pokeData.name}</h1>
                    <h1>Type: {pokeData.types[0].type.name}</h1>
                    {#each pokeData.stats as item, i}
                        <h1>{item.stat.name}: {item.base_stat}</h1>
                    {/each}
                </div>
                <!--                    right stats-->
            </div>
        </div>
        {:catch error}
            <p>{error}</p>
        {/await}
        <div class="absolute bottom-0 w-screen max-w-7xl" in:slide={{delay: 500, duration: 1000}}>
            <Footer/>
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
        group-hover:rounded-3xl
        group-hover:bg-transparent
        duration-300
        transition-all
        ease-linear
    }
</style>