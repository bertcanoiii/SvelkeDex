<script>
</script>

<div class="hidden text-center sm:flex sm:flex-col sm:min-h-screen bg-blue-300 devBorder">
    <div class="flex flex-col items-center pt-2 px-5 w-36 devBorder">
        <div class="flex">
            <a href="/">
                <img class="devBorder ml-2 hover:rotate-12 duration-300" src="images/logo.png" alt="logo">
            </a>
        </div>
        <div class="flex flex-col space-y-5 pt-5 devBorder">
            <a class="navBarLink" href="/">Home</a>
            <a class="navBarLink" href="#/pokemon">Pokemon</a>
            <a class="navBarLink" href="#/about">About</a>
        </div>
    </div>
</div>


<style>
    .navBarLink {
        @apply
        text-xl
        text-slate-700
        font-bold
        underline
        hover:text-white
        duration-200
    }
</style>