<script>
    import { pop } from 'svelte-spa-router';
    import {fade, fly, slide} from 'svelte/transition';
    import Footer from "../components/Footer.svelte";
    import PokemonDetailCard from "../components/PokemonDetailCard.svelte";

    export let params = {};
    let pokeId = parseInt(params.id, 10);

    const getPokemon = async () => {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        return await response.json();
    }

    let pokePromise = getPokemon();

</script>

<!--debug lines-->
<!--<div class="dbd">-->
<!--    <h1>pokeID {pokeId}</h1>-->
<!--</div>-->

<!--Main Container-->
<div class="max-w-7xl mx-auto flex justify-center text-slate-800">
<!--  Inner Main Container  -->
    <div class="h-screen w-screen flex flex-col items-center pt-14">

        {#await pokePromise then pokeData}
            <PokemonDetailCard pokemonData="{pokeData}"/>
        {:catch error}
            <p>{error}</p>
        {/await}
        <div class="absolute bottom-0 w-screen max-w-7xl" in:slide={{delay: 500, duration: 1000}}>
            <Footer/>
        </div>
    </div>
</div>

<style>
</style>