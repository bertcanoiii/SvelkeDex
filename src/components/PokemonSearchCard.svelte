<script>
    export let pokemonName;
    export let pokemonId;

</script>

<div class="flex group">
    <div class="flex flex-col m-1 items-center cardBackground">
        <!--            Pokemon Card Top-->
        <div class="flex flex-col items-center ">
            <h3 class="text-lg sm:text-xl md:text-2xl text font-bold text-slate-700 group-hover:text-blue-900 group-hover:scale-90 duration-500">{pokemonName}</h3>
        </div>
        <!--            Pokemon Card Body-->
        <div class="flex flex-row justify-center items-center space-x-2 m-2 p-2 pokePicBackground
                    ">
<!--        <p class="text-slate-700 font-bold">ID:{pokemon.url.substring(34, pokemon.url.length - 1)}</p>-->
            <img class="group-hover:-translate-y-0.5 group-hover:scale-150 hover:rotate-3 duration-300 group-hover:a" src="images/main_sprites/{pokemonId}.png" alt=""/>
        </div>
    </div>
</div>

<style>
    .cardBackground {
        @apply
        bg-blue-100
        rounded-xl
        py-2
        drop-shadow-md
        /*group-hover:bg-transparent */
        group-hover:rounded-3xl
        group-hover:bg-transparent
        duration-300
        transition-all
        ease-linear
    }

    .pokePicBackground {
        @apply bg-blue-200 rounded-full
        group-hover:bg-transparent
        transition-all
        ease-linear
    }
</style>