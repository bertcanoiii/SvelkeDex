import { wrap } from 'svelte-spa-router/wrap'

import Home from './routes/Home.svelte'
import PokemonSearch from "./routes/PokemonSearch.svelte";
import PokemonDetail from "./routes/PokemonDetail.svelte";

export default {
    '/': Home,
    '/welcome': Home,
    '/pokemon/:id': PokemonDetail,
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