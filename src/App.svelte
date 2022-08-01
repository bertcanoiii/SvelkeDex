<script>
    import routes from './routes.js'
    import Router from 'svelte-spa-router'
    import Navbar from './components/Navbar.svelte'
</script>
<Navbar/>
<main>

    <Router {routes}/>
</main>

<style>

</style>
