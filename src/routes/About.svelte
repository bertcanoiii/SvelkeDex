<script>
  import { fade } from 'svelte/transition';
</script>


<div class="relative flex flex-col justify-center devBorder">
  <div class="h-screen"
       style="background-image: url('/images/background.jpg');
               background-repeat: no-repeat;
               background-position: top;
               background-size: cover;"
       in:fade={{delay: 300}}>
    <div class="flex flex-col
                h-screen w-screen backdrop-blur-[3px]
                items-center
                dbr"
         in:fade={{delay: 400}}>
      <div class="flex justify-center pt-8 w-11/12 ">
        <h1 class="text-4xl text-slate-700">About</h1>
      </div>
      <div class="flex flex-col w-11/12 overflow-y-scroll overflow-x-hidden max-w-5xl mx-auto items-center mb-10">
        <div class="bg-blue-200/90 p-2 mt-2 sm:p-4 md:p-10 rounded-xl">
          <div class="flex flex-col" in:fade={{delay: 500}}>
            <div class="flex flex-col items-center text-sm sm:text-base md:text-xl text-slate-700 ">
              <ul class="space-y-2 sm:space-y-4">
                <li>This is a simple web app made with Svelte.</li>
                <li>Making this site helped me escape tutorial hell.</li>
                <li>If you are reading this and are currently in tutorial hell, you can escape too!</li>
                <img class="rounded-xl max-w-11/12 hover:scale-105 duration-200" src="images/dev_time.png" alt="pic of development time">
                <li>I spent about 76 hours making Svelkedex and learned a lot on the way</li>
                <li>
                  If you're interested, feel free to check out the code on <a class="underline hover:text-white duration-200" href="https://github.com/bertcanoiii/SvelkeDex">github!</a>
                </li>
                <li>Special thanks to Patrick from the Svelte-Discord for helping me figure out why the search bar wasn't working on mobile! 😆 🤦</li>
                <li>Thanks for checking it out!</li>
              </ul>
              <img class="mt-4 rounded-xl w-1/2 hover:scale-150 duration-200" src="images/pokemon-jump.gif" alt="pokemon jumping gif">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>