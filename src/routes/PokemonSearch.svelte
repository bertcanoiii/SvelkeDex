<script>
    import sprites from "../sprites.js"

</script>

<div>
    <h1>This is the Pokemon page</h1>
    {#each sprites as sprite}
        <h1>{sprite.id}</h1>
        <h1>{sprite.name}</h1>
        <img src="images/main_sprites/{sprite.id}.png" alt="">
    {/each}
</div>