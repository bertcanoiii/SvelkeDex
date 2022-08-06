<div class="text-center w-screen bg-blue-300 border-b-2 border-slate-200 py-2 devBorder">
    <div class="flex flex-row justify-between px-10 min-w-screen devBorder">
        <a href="/#/lost">
            <img class="devBorder h-20 w-20 hover:rotate-45 hover:translate-y-1 duration-200"
                 src="images/logo.png"
                 alt="logo"
            >
        </a>
        <div class="flex flex-row space-x-4 items-center devBorder">
            <a class="navBarLink" href="/">Home</a>
            <a class="navBarLink" href="#/pokemon">Pokemon</a>
            <a class="navBarLink" href="#/about">About</a>
        </div>
    </div>
</div>

<style>
    .navBarLink {
        @apply
        text-lg
        text-slate-700
        font-bold
        underline
        hover:text-white
        duration-200
    }
</style>