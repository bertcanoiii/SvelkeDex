<script>
  import { fade, slide } from 'svelte/transition';
</script>

<div class="relative flex flex-col min-h-screen items-center max-w-5xl mx-auto devBorder">
<!--  Main Inner Container-->
  <div class="flex flex-col items-center justify-center h-screen w-screen">
<!--    Welcome text-->
    <div class="flex flex-col text-6xl text-center text-slate-700" in:fade={{delay: 900}}>
      <h1>Welcome to</h1>
      <div class="flex flex-row items-center"
           in:slide={{delay: 950, duration: 500}}
      >
        <a href="https://svelte.dev/">
          <img class="h-20 opacity-80 hover:scale-125 hover:opacity-100 duration-150"
               src="images/svelte-icon.png"
               alt="">
        </a>velkedex!
      </div>
      <p class="text-xs">A web app made with svelte!</p>
    </div>
<!--    Gif Links-->
    <div class="flex flex-col mt-5 mb-10 px-2 sm:px-0 overflow-y-auto homeText" in:fade={{delay: 1000}}>
      <div class="flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0  devBorder"
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
</div>


<style>
  .linkBackground {
    @apply
    bg-white/30
    rounded-lg
    hover:bg-white/90
    hover:-translate-y-0.5
    hover:drop-shadow-2xl
    hover:rounded-2xl
    transition-all
    ease-linear
    duration-100
  }
  
  .homeText {
    @apply
    pt-2
    text-center
    text-slate-700
    text-xl
  }
</style>
