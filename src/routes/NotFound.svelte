<script>
  import { fade } from 'svelte/transition';
</script>

<div class="relative devBorder">
  <div class="min-h-screen"
       style="background-image: url('/images/pikachu_crying.gif');
                background-repeat: no-repeat;
                background-position: top;
                background-size: cover;"
       in:fade={{delay: 200}}
  >
    <a class="lostLink" in:fade={{delay: 1000}} href="/#/welcome">
      <div class="pt-24">
        <p>Lost?</p>
        <p>Click me to go home</p>
      </div>
    </a>
  </div>
</div>

<style>
  .lostLink {
    @apply
    absolute
    top-0
    left-0
    right-0
    h-screen
    pb-10
    px-5
    text-3xl
    text-slate-700
    text-center
    font-bold
    backdrop-blur-[6px]
  }
</style>