<script>
    export let pokemonName;
    export let pokemonId;

</script>

<div class="flex group">
    <div class="flex flex-col m-1 items-center bg-blue-100 rounded-xl py-2 drop-shadow-xl group-hover:bg-blue-800 group-hover:text-white duration-300">
        <!--            Pokemon Card Top-->
        <div class="flex flex-col items-center ">
            <h3 class="text-lg sm:text-xl md:text-2xl text font-bold text-slate-700 group-hover:text-white duration-200">{pokemonName}</h3>
        </div>
        <!--            Pokemon Card Body-->
        <div class="flex flex-row justify-center items-center space-x-2 px-2">
<!--                                <p class="text-slate-700 font-bold">ID:{pokemon.url.substring(34, pokemon.url.length - 1)}</p>-->
            <img class="bg-blue-200 rounded-xl group-hover:bg-transparent hover:-translate-y-0.5 hover:scale-150 hover:rotate-3 duration-100 group-hover:a" src="images/main_sprites/{pokemonId}.png" alt=""/>
        </div>
    </div>
</div>