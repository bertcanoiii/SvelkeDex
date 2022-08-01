<script>
    import routes from './routes.js'
    import Router from 'svelte-spa-router'
    import Navbar from './components/Navbar.svelte'

    import { onMount } from 'svelte';
    import { pokeData, pokemonList } from "./store.js";

    onMount(async () => {
        fetch("https://pokeapi.co/api/v2/type/1/")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                pokeData.set(data);
            }).catch(error => {
            console.log(error);
            return[];
        });
    });
</script>

<main class="flex flex-row space-x-10">
    <Navbar/>
    <div class="py-10">
        <Router {routes}/>
    </div>
</main>

<style>

</style>
