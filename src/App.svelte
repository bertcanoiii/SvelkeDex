<script>
    import { fade, slide } from 'svelte/transition';
    import routes from './routes.js'
    import Router from 'svelte-spa-router'
    import Navbar from './components/Navbar.svelte'
    import Footer from "./components/Footer.svelte";
    import Loading from "./components/Loading.svelte";
    import {onDestroy} from "svelte";

    let showMenu = false;

    function showMenuButton(){
        showMenu = !showMenu;
    }

    //Counter for loading on first visit
    let counter = 0;
    const counterInterval = setInterval(() => counter += 0.5, 500);
    $: fadeLoader = (counter <= 1);

    onDestroy(() => clearInterval(counterInterval));

</script>


{#if fadeLoader}
    <Loading/>
{:else}
    <main class="relative">
        <div class="-z-50" style="background-image: url('/images/background2.png');
                   background-repeat: no-repeat;
                   background-position: top;
                   background-size: cover;">
            <div class="flex flex-col items-center backdrop-blur-[1px]"
                 in:fade={{delay: 300}}>
                <div class="flex flex-col w-screen mx-auto">
                    <div class="flex flex-col items-center max-w-5xl mx-auto devBorder">
                        <button class="z-20" on:click={showMenuButton} in:fade={{delay: 500, duration:500}}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="devBorder stroke-slate-700 hover:stroke-white duration-200 h-8 w-10 absolute top-2 right-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        {#if showMenu}
                            <Navbar/>
                        {/if}
                    </div>
                    <Router {routes}/>
                    <div class="absolute bottom-0 left-0 right-0 w-screen max-w-5xl mx-auto" in:slide={{delay: 500, duration: 1000}}>
                      <Footer/>
                    </div>
                </div>
            </div>
        </div>
    </main>
{/if}

<style>

</style>
