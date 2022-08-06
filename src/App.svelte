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
    <div class="flex flex-row">
        <div class="relative flex flex-column">
            {#if showHamburger}
                {#if !showMenu}
                    <button class="z-50" on:click={showMenuButton} in:fade={{delay: 500, duration:700}}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-slate-700 hover:stroke-amber-500 duration-200 h-8 w-10 absolute top-2 left-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                {:else}
                    <button class="z-50 w-full text-slate-700 text-xs text-center absolute top-2 hover:text-white duration-200"
                            on:click={showMenuButton}
                            in:fade={{delay: 500, duration:700}}
                    >
                        hide menu
                    </button>
                    <Navbar/>
                {/if}
            {:else}
                <Navbar/>
            {/if}
        </div>
        <div class="w-screen">
            <Router {routes}/>
        </div>
    </div>
</main>

<style>

</style>
