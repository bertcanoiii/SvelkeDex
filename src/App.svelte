<script>
    import { fade } from 'svelte/transition';
    import routes from './routes.js'
    import Router from 'svelte-spa-router'
    import Navbar from './components/Navbar.svelte'
    import Footer from "./components/Footer.svelte";
    import Loading from "./components/Loading.svelte";
    import {onDestroy} from "svelte";

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
    //Counter for loading on first visit
    let counter = 0;
    const counterInterval = setInterval(() => counter += 0.5, 500);
    $: fadeLoader = (counter <= 0.5);

    onDestroy(() => clearInterval(counterInterval));

</script>

<svelte:window bind:outerWidth={screenSize}/>

{#if fadeLoader}
    <Loading/>
{:else}
    <main class="border-slate-200 border-2">
        <div class="-z-50" style="background-image: url('/images/background2.png');
                   background-repeat: no-repeat;
                   background-position: top;
                   background-size: cover;">
            <div class="flex flex-col mx-auto">
                <div class="flex flex-col items-center max-w-5xl mx-auto devBorder">
                            <button class="z-10" on:click={showMenuButton} in:fade={{delay: 500, duration:500}}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="devBorder stroke-slate-700 hover:stroke-white duration-200 h-8 w-10 absolute top-2 right-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                    {#if showMenu}
                        <Navbar/>
                    {/if}
                </div>
                <Router {routes}/>
                <Footer/>
            </div>
        </div>
    </main>
{/if}

<style>

</style>
