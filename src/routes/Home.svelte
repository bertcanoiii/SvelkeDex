<script>
    import { fade } from 'svelte/transition';
    import { onDestroy } from 'svelte';
    import Loading from "../components/Loading.svelte";

    let counter = 0;
    const counterInterval = setInterval(() => counter += 1, 1000);
    $: fadeLoader = (counter <= 1);

    onDestroy(() => clearInterval(counterInterval));
</script>

<!--{#if fadeLoader}-->
<!--    <Loading/>-->
<!--{:else}-->
    <div class="relative min-h-screen flex flex-col justify-center devBorder">
        <div class="min-h-screen"
             style="background-image: url('/images/background2.png');
               background-repeat: no-repeat;
               background-position: top;
               background-size: cover;"
             in:fade={{delay: 200}}
        >
            <div class="flex flex-col min-h-screen pt-12 backdrop-blur-md" in:fade={{delay: 700}}>
                <div class="flex flex-col max-w-5xl mx-auto devBorder">
                    <div class="text-6xl text-center text-slate-700" in:fade={{delay: 900}}>
                        <h1>Welcome to SvelkeDex!</h1>
                    </div>
                    <div class="flex flex-col max-w-5xl mt-5 homeText" in:fade={{delay: 1000}}>
                        <div class="flex pl-6 sm:pl-12 devBorder" in:fade={{delay: 1200}}>
                                <a class="flex flex-col items-center justify-center devBorder" href="/#/pokemon">
                                    <img class="h-40" src="images/home_pic_1.jpeg" alt="">
                                    Search Pokemon!
                                </a>

                        </div>
                        <div class="flex justify-end pr-16 sm:pr-12 devBorder" in:fade={{delay: 1400}}>
                            <a class="flex flex-col items-center justify-center devBorder" href="/#/pokemon">
                                <img class="h-40" src="images/home_pic_2.jpeg" alt="">
                                About This Site!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!--{/if}-->

<style>
    .homeText {
        @apply
        pt-2
        text-center
        text-slate-700
        text-xl
    }
</style>
