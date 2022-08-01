<script>

    import NameSearch from "./NameSearch.svelte";

    let selected = '';

    function handleTypeClicked(){
        selected = "Type";
    }

    function handleNameClicked(){
        selected = "Name";
    }

    function handleClickButton(){
        alert("This button doesn't do anything 😅")
    }
    function handlePokeballButton(){
        alert("That's a pokeball button, it doesn't do anything though unfortunately 😅")
    }
</script>

<div class="relative
            flex flex-col
            items-center
            bg-poke-dex-red
            w-full h-full
            p-6 rounded-2xl
            border-8 border-black
            shadow-2xl"
>
<!--    Top left button 1-->
    <img class="absolute top-6 left-6 h-16 drop-shadow-2xl hover:-translate-y-0.5" src="images/pokeball_pic.png" alt="pokeball" on:click={handlePokeballButton}>
<!--    Top left button 2-->
    <div class="absolute top-6 left-[98px] w-10 h-10 bg-red-900 border-4 border-black rounded-full drop-shadow-2xl hover:-translate-y-0.5" on:click={handleClickButton}></div>
<!--    Top left button 3-->
    <div class="absolute top-6 left-[148px] w-10 h-10 bg-yellow-500 border-4 border-black rounded-full drop-shadow-2xl hover:-translate-y-0.5" on:click={handleClickButton}></div>
<!--    Pokedex Screen-->
    <div class="flex flex-col sm:flex-row mt-[90px] justify-center bg-indigo-200 rounded-2xl h-80 border-black border-8 w-full">
        <h1>
            {#if !selected}
                <NameSearch/>
            {:else}
                <NameSearch/>
            {/if}
        </h1>
    </div>
<!--    Button Container-->
    <h1 class="mt-5 text-slate-900 text-2xl">Search By</h1>
    <div class="flex flex-row justify-center space-x-6 mt-5">
        <button class="bg-red-900 rounded-3xl py-2 w-20 text-slate-300 font-bold border-2 border-slate-900 drop-shadow hover:-translate-y-0.5" on:click={handleTypeClicked}>Type</button>
        <button class="bg-red-900 rounded-3xl py-2 w-20 text-slate-300 font-bold border-2 border-slate-900 drop-shadow hover:-translate-y-0.5" on:click={handleNameClicked}>Name</button>
    </div>
</div>

