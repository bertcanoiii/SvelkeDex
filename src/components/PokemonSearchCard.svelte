<script>
    export let pokemonName;
    export let pokemonId;

</script>

<div class="flex">
    <div class="flex flex-col m-1 items-center bg-blue-100 rounded-xl py-2 drop-shadow-xl">
        <!--            Pokemon Card Top-->
        <div class="flex flex-col items-center">
            <h3 class="text-lg sm:text-xl md:text-2xl text font-bold text-slate-700 duration-500">{pokemonName}</h3>
        </div>
        <!--            Pokemon Card Body-->
        <div class="flex flex-row justify-center items-center space-x-2 px-2">
<!--                                <p class="text-slate-700 font-bold">ID:{pokemon.url.substring(34, pokemon.url.length - 1)}</p>-->
            <img class="bg-blue-200 rounded-xl" src="images/main_sprites/{pokemonId}.png" alt=""/>
        </div>
    </div>
</div>