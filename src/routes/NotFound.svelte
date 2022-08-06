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
<!--        <h1 class="absolute top-5 left-10 text-4xl text-slate-200 text-center font-bold backdrop-blur-md rounded-2xl pt-1 px-5">Lost?</h1>-->
        <a class="lostLink" in:fade={{delay: 500}} href="/">
            <p>Lost?</p>
            <p>Click me to go home</p>
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
        py-10
        px-5
        text-3xl
        text-slate-700
        text-center
        font-bold
        backdrop-blur-md
        rounded-b-2xl
    }
</style>