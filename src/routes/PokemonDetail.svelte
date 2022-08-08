<script>
    import { pop, replace, push } from 'svelte-spa-router';
    import { setContext, getContext } from 'svelte';
    import {fade, fly, slide} from 'svelte/transition';
    import Footer from "../components/Footer.svelte";
    import PokemonDetailCard from "../components/PokemonDetailCard.svelte";
    import { pokemonName, pokemonId, currentPokemon, currentPokemonType, totalPokemon } from "../store.js";

    export let params = {};
    let pokeId = parseInt(params.id, 10);
    currentPokemon.set(pokeId);

    const getPokemon2 = async testNum => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${testNum}`)
            .then(response => response.json())
            .then(data => {
                console.log("inside detail")
                pokemonName.set(data.name)
                pokemonId.set(data.id)
                currentPokemonType.set(data.types[0].type.name)
            }).catch(error => {
            console.log(error)
            return [];
        });
        currentPokemon.set(testNum);
    };

</script>

<!--debug lines-->
<!--<div class="dbd">-->
<!--    <h1>pokeID {$pokemonName}</h1>-->
<!--    <h1>pokeID {$pokemonId}</h1>-->
<!--</div>-->

<!--Main Container-->
<div class="max-w-7xl mx-auto flex justify-center text-slate-800">
<!--  Inner Main Container  -->
    <div class="h-screen w-screen flex flex-col items-center dbr pt-14">
        <div class="max-w-3xl w-full px-10 mx-auto dbr">
            <div class="flex justify-between w-full dbr">
                <button on:click={() => getPokemon2($currentPokemon - 1 < 0 ? $currentPokemon : $currentPokemon - 1)}
                        on:click={push(`#/pokemon/${$currentPokemon}`)}>
                    prev
                </button>
                <button on:click={() => getPokemon2($currentPokemon + 1 > $totalPokemon ? $currentPokemon : $currentPokemon + 1)}
                        on:click={push(`#/pokemon/${$currentPokemon}`)}>
                    next
                </button>
            </div>
        </div>
        <PokemonDetailCard pokeParamId="{pokeId}"/>
        <div class="absolute bottom-0 w-screen max-w-7xl" in:slide={{delay: 500, duration: 1000}}>
            <Footer/>
        </div>
    </div>
</div>

<style>
</style>