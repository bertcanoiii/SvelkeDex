<script>
</script>

<div class="devBorder
            min-w-screen
            text-center
            overflow-hidden
            px-1
            bg-blue-300
            border-slate-200
            border-t-2
            border-l-2
            border-r-2
            rounded-t-sm
            lg:rounded-t-3xl
            duration-500
            ease-linear"
>
  <div class="flex flex-col max-w-5xl mx-auto">
    <div class="flex flex-col justify-between">
      <div class="flex flex-row items-center justify-between
                  min-w-screen px-2 sm:px-4 md:px-10 devBorder">
        <div class="flex flex-row min-w-screen space-x-10 dbr">
          <a class="navBarLink" href="#/welcome">Home</a>
          <a class="navBarLink" href="#/pokemon">Pokemon</a>
          <a class="navBarLink" href="#/about">About</a>
          <a class="navBarLink" href="https://github.com/bertcanoiii/SvelkeDex">Github</a>
        </div>
        <a class="" href="/#/lost">
          <img class="devBorder h-8 w-8 hover:rotate-45 hover:translate-y-1 duration-200"
               src="images/logo.png"
               alt="logo"
          >
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .navBarLink {
    @apply
    text-sm
    text-slate-700
    font-bold
    hover:text-white
    duration-200
  }
</style>