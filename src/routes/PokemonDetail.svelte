<script>
    import {fade, fly, slide} from 'svelte/transition';
    import {push} from 'svelte-spa-router';
    import Footer from "../components/Footer.svelte";
    import PokemonDetailCard from "../components/PokemonDetailCard.svelte";

    export let params = {};
    let pokeId = parseInt(params.id, 10);
    let pokeCheck = true;
    let prevId = pokeId - 1;
    let prevLink = `#/pokemon/${prevId}`
    let nextId = pokeId + 1;
    let nextLink = `#/pokemon/${nextId}`

    const getPokemon = async () => {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        return await response.json();
    }

    let pokePromise = getPokemon();

    function goToPrev(){
        push(`${prevLink}`);
        window.location.reload();
    }

</script>

<!--<div class="absRef text-sm">-->
<!--    <h1>pokeID {pokeId}</h1>-->
<!--    <h1>pokeID {prevLink}</h1>-->
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
    /*.Background {*/
    /*    @apply*/
    /*    bg-blue-100/70*/
    /*    py-2*/
    /*    rounded-md*/
    /*    drop-shadow-md*/
    /*    group-hover:rounded-3xl*/
    /*    group-hover:bg-transparent*/
    /*    duration-300*/
    /*    transition-all*/
    /*    ease-linear*/
    /*}*/
</style>