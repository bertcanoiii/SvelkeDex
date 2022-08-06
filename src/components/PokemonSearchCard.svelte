<script>
    import { onMount } from 'svelte';

    export let pokemonName;
    export let pokePicPath;


    onMount(async () => {
        if (pokemonName.length > 12) {
            pokemonName = pokemonName.slice(0, 12);
        }
    })

</script>

<div class="w-28 relative group">
    <div class="flex flex-col m-1 items-center cardBackground">
        <!--            Pokemon Name-->
        <div class="w-full text-center items-center devBorder">
            <h3 class="nameText">{pokemonName}</h3>
        </div>
        <!--            Pokemon Pic-->
        <div class="flex flex-row justify-center items-center m-2 pokePicBackground">
<!--        <p class="text-slate-700 font-bold">ID:{pokemon.url.substring(34, pokemon.url.length - 1)}</p>-->
            <div class="absolute w-24 h-24 -z-50 border rounded-full group-hover:block group-hover:border-blue-600 group-hover:border-8 duration-500"></div>
            <img class="devBorder group-hover:-translate-y-0.5 group-hover:scale-150 hover:rotate-3 duration-300 group-hover:a" src="{pokePicPath}" alt="images/pokeball_pic.png"/>
        </div>
    </div>
</div>

<style>

    .nameText {
        @apply
        text-lg
        text-slate-700
        font-bold
        group-hover:-translate-y-1
        group-hover:text-xl
        group-hover:text-blue-600
        duration-500
    }

    .cardBackground {
        @apply
        bg-blue-100/50
        py-2
        rounded-md
        drop-shadow-md
        group-hover:rounded-3xl
        group-hover:bg-transparent
        duration-300
        transition-all
        ease-linear
    }

    .pokePicBackground {
        @apply bg-blue-200
        rounded-full
        group-hover:bg-transparent
        ease-linear
        duration-200
    }
</style>