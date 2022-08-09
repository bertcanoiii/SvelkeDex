<script>
</script>

<div class="text-center min-w-screen bg-blue-300 border-2 border-slate-200 devBorder rounded-t-sm lg:rounded-t-3xl duration-1000 ease-linear">
    <div class="flex flex-col max-w-5xl mx-auto">
        <div class="flex flex-col justify-between">
            <div class="flex flex-col items-center sm:flex-row sm:justify-between sm:px-10 min-w-screen devBorder">
                <div class="flex flex-row space-x-10 items-center devBorder">
                    <a class="navBarLink" href="#/welcome">Home</a>
                    <a class="navBarLink" href="#/pokemon">Pokemon</a>
                    <a class="navBarLink" href="#/about">About</a>
                </div>
                <a href="/#/lost">
                    <img class="devBorder h-10 w-10 hover:rotate-45 hover:translate-y-1 duration-200"
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
        underline
        hover:text-white
        duration-200
    }
</style>