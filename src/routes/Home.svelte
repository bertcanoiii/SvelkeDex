<script>
    import { fade } from 'svelte/transition';
    import { onDestroy } from 'svelte';
    import Loading from "../components/Loading.svelte";

    let counter = 0;
    const counterInterval = setInterval(() => counter += 1, 1000);
    $: fadeLoader = (counter <= 1);

    onDestroy(() => clearInterval(counterInterval));
</script>

{#if fadeLoader}
    <Loading/>
{:else}
    <div class="relative flex flex-col justify-center devBorder">
        <div class="min-h-screen -z-10"
             style="background-image: url('/images/background2.png');
               background-repeat: no-repeat;
               background-position: top;
               background-size: cover;"
             in:fade={{delay: 200}}
        >
            <div class="flex flex-col h-screen backdrop-blur-md routeContainer"
                 in:fade={{delay: 700}}>
                <div class="text-center text-3xl text-slate-700" in:fade={{delay: 900}}>
                    <h1>Welcome to svelkedex.com!</h1>
                </div>
                <div class="flex flex-wrap justify-center homeText" in:fade={{delay: 1200}}
                >
                    <ul>
                        <li>This is a simple web app made with Svelte</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .homeText {
        @apply
        pt-2
        text-center
        text-slate-700
        text-xl
    }
</style>
