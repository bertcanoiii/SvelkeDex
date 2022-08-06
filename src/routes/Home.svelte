<script>
    import {fade, slide} from 'svelte/transition';
    import Footer from "../components/Footer.svelte";

</script>

<div class="relative flex flex-col min-h-screen items-center max-w-7xl mx-auto devBorder">
    <div class="flex flex-col items-center justify-center h-screen w-screen">
        <div class="text-6xl text-center text-slate-700" in:fade={{delay: 900}}>
            <h1>Welcome to SvelkeDex!</h1>
        </div>
        <div class="flex flex-col my-5 px-2 sm:px-0 homeText" in:fade={{delay: 1000}}>
            <div class="flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0 devBorder"
                 in:fade={{delay: 1200}}>
                <a class="flex flex-col items-center justify-center linkBackground devBorder"
                   href="/#/pokemon"
                   in:fade={{delay: 1400}}>
                    <img class="max-h-40" src="images/pikachu_home_gif.webp" alt="">
                    Search Pokemon!
                </a>
                <a class="flex flex-col items-center justify-end linkBackground devBorder"
                   href="/#/about"
                   in:fade={{delay: 1600}}>
                    <img class="max-h-40" src="images/go_to_about.gif" alt="">
                    About This Site!
                </a>
            </div>
        </div>
    </div>
    <div class="absolute bottom-0 w-screen max-w-7xl" in:slide={{delay: 500, duration: 1000}}>
        <Footer />
    </div>
</div>


<style>
    .linkBackground {
        @apply
        bg-white/30
        rounded-3xl
        hover:bg-white/90
        hover:border-slate-900
        hover:border-8
        transition-all
        ease-linear
        duration-500
    }

    .homeText {
        @apply
        pt-2
        text-center
        text-slate-700
        text-xl
    }
</style>
