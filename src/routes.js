import { wrap } from 'svelte-spa-router/wrap'

import Home from './routes/Home.svelte'
import PokemonSearch from "./routes/PokemonSearch.svelte";

export default {
    '/': Home,
    '/pokemon': PokemonSearch,
    //Dynamically loaded page
    '/about': wrap({
        asyncComponent: () => import('./routes/About.svelte')
    }),

    //Dynamically loaded page
    '*': wrap({
        asyncComponent: () => import('./routes/NotFound.svelte')
    }),
}