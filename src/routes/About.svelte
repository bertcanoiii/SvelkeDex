<script>
  import { fade, slide } from 'svelte/transition';
  import Footer from "../components/Footer.svelte";
</script>


<div class="relative flex flex-col justify-center devBorder">
  <div class="min-h-screen"
       style="background-image: url('/images/background.jpg');
               background-repeat: no-repeat;
               background-position: top;
               background-size: cover;"
       in:fade={{delay: 300}}>
    <div class="flex flex-col h-screen backdrop-blur-[3px] items-center" in:fade={{delay: 700}}>
      <div class="pt-20 h-screen">
        <div class="text-center text-6xl text-slate-700">
          <h1>About</h1>
        </div>
        <div class="flex flex-wrap justify-center aboutText">
          <ul>
            <li>This is a simple web app made with Svelte</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .aboutText {
    @apply
    text-center
    text-slate-700
    text-2xl
  }
</style>