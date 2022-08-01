<script>
    import Pokedex from "./components/Pokedex.svelte";

    let scroll;
</script>

<svelte:window bind:scrollY={scroll}/>
<h1 class="fixed filter blur-none">{scroll}</h1>

<main>
    <div class="globalBackground">
        <div class="w-screen h-screen backdrop-blur-[3px]">
            <div class="container max-w-4xl mx-auto">
                <section id="hero">
                    <div class="container max-w-2xl mx-auto devBorder">
                        <nav class="flex flex-col items-center p-10">
                            <img src="images/pokeapi_256.png" alt="pokemon logo">
                        </nav>
                    </div>
                </section>
                <section id="pokedex">
                    <div class="container max-w-2xl mx-auto devBorder">
                        <div class="flex flex-col items-center">
                            <Pokedex/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</main>

<style>
    h1  {
        position: fixed;
        z-index: 10;
    }
</style>
