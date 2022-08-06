<script>
    import { fade } from 'svelte/transition';
    import routes from './routes.js'
    import Router from 'svelte-spa-router'
    import Navbar from './components/Navbar.svelte'

    // import { onMount } from 'svelte';
    // import { pokeData, pokemonList } from "./store.js";
    //
    // onMount(async () => {
    //     fetch("https://pokeapi.co/api/v2/type/1/")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             pokeData.set(data);
    //         }).catch(error => {
    //         console.log(error);
    //         return[];
    //     });
    // });

    let showMenu = false;
    let screenSize = 0;
    $: showHamburger = (screenSize < 632);

    function showMenuButton(){
        showMenu = !showMenu;
    }

</script>

<svelte:window bind:outerWidth={screenSize}/>

<main class="border-slate-200 border-2">
    <div class="flex flex-col">
        <div class="relative flex flex-col">
            {#if !showMenu}
                <button class="z-10" on:click={showMenuButton} in:fade={{delay: 500, duration:500}}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-slate-700 hover:stroke-white duration-200 h-8 w-10 absolute top-2 right-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            {:else}
                <button class="absolute right-4 top-2 text-slate-700 hover:text-white duration-200"
                        on:click={showMenuButton}
                        in:fade={{delay: 500, duration:500}}
                >
                    hide menu
                </button>
                <Navbar/>
            {/if}
        </div>
        <Router {routes}/>
    </div>
</main>

<style>

</style>
