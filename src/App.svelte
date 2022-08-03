<script>
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
</script>

<main class="devBorder">
    <div class="flex flex-row">
        <Navbar/>
        <div class="py-10">
            <Router {routes}/>
        </div>
    </div>
</main>

<style>

</style>
