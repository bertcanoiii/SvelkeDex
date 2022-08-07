<script>
    import { fade, slide, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { location } from 'svelte-spa-router';
    import { pokeData, pokemonStatList } from "../store.js";
    import PokemonDetailCard from "../components/PokemonDetailCard.svelte";
    import Footer from "../components/Footer.svelte";
    export let params = {};

    let pokeId = parseInt(params.id, 10);
    $: previousPokemon = pokeId - 1;
    $: nextPokemon = pokeId + 1;

    onMount(async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                pokeData.set(data);
            }).catch(error => {
            console.log(error);
            return[];
        })
    });

</script>

<!--<div class="absRef text-sm">-->
<!--    <h1>url {$location}</h1>-->
<!--    <h1>pokeID {pokeId}</h1>-->
<!--    <h1>{$pokemonStatList.name}</h1>-->
<!--    <h1>{JSON.stringify($pokemonStatList)}</h1>-->
<!--</div>-->
<!--Main Container-->
<div class="max-w-7xl mx-auto flex justify-center text-slate-800">
<!--  Inner Main Container  -->
    <div class="h-screen w-screen flex flex-col items-center pt-14">
        <PokemonDetailCard pokemonData="{$pokemonStatList}"/>
        <div class="absolute bottom-0 w-screen max-w-7xl" in:slide={{delay: 500, duration: 1000}}>
            <Footer/>
        </div>
    </div>
</div>

<style>

</style>