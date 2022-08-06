<script>
    import { location } from 'svelte-spa-router';
    export let params = {};
    import { onMount } from 'svelte';
    import { pokeData, pokemonStatList } from "../store.js";

    const pokeId = parseInt(params.id, 10);

    onMount(async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
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


<div class="h-screen">
    <h1>url {$location}</h1>
    <h1>pokeID {pokeId}</h1>
    <h1>pokeData {$pokemonStatList.abilities[0].ability.name}</h1>
    <h1>pokeData {JSON.stringify($pokemonStatList)}</h1>
</div>