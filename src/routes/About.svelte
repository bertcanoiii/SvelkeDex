<script>
    import { fade } from 'svelte/transition';
</script>



<div class="relative flex flex-col justify-center devBorder">
    <div class="min-h-screen -z-10"
        style="background-image: url('/images/background.jpg');
               background-repeat: no-repeat;
               background-position: top;
               background-size: cover;"
         in:fade={{delay: 500}}
    >
        <div class="flex flex-col h-screen backdrop-blur-md"
        in:fade={{delay: 1000}}>
            <div class="text-center text-3xl text-slate-700">
                <h1>About</h1>
            </div>
            <div class="flex flex-wrap justify-center aboutText">
                <ul>
                    <li>What I learned/What Knowledge Was Reinforced</li>
                </ul>
            </div>
        </div>
    </div>


</div>

<style>
    .aboutText {
        @apply
        text-center
        text-slate-700
        text-xl
    }
</style>