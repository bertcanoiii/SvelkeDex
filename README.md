# SvelkeDex

This webapp was made in order to practice Svelte, tailwind, and other web development fundamentals.

## What I’ve Learned and What Knowledge Has Been Reinforced Working on This Project

**Tailwind/Styling**

- `flex-Wrap`: 
  - I learned the hard way that this is a great way to get components within a container to fit on the screen. Even though I learned about this watching/going through several tutorials, it finally clicked when I was trying to get the Pokémon card components to fit on the `/pokemon` page. I think I ended up spending something like 5 hours trying to get grid working the way I wanted until I saw some tutorial video on YouTube and switched to flex-wrap. 🤦
- `min-h-screen`: 
  - Means the element in question will stretch to fit the entire screen even if at first the page height has no scroll and then another element stretches the page height requiring the user to scroll.
- z-positioning: 
  - On the PokemonSearchCard component, I used z-positioning to hide an element that comes into view upon group-hover.
  - z-positioning also helps with utilizing backdrop blur. 
- `backdrop-blur`:
  - This is a thing, and it's super easy to use to acquire +1 fancy points.
- nav-bar design: 
  - Nav-bar design, at least at this stage in my learning journey, is quite tricky. I may just be doing it suboptimally. 
  - Prior to switching to a top-bar, I was using a nav-bar that stayed on the left side of the screen, on default-tailwind `sm:` sized screens or larger. I attempted to implement a show/hide button, but if the navbar was hidden, and the show menu button was used, an issue with side scrolling occurred which caused the overall page layout to be altered in a way that I didn't want. To get rid of that issue I switched to a top-bar.
    - I think in future projects I will attempt other sidebar implementations. For this one the top-bar approach works fine. 

**Svelte** 

- Routing:
  - I learned how to utilize [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router) for routing between pages. This tool is very simple and easy to implement. 
- API implementation:
  - Using the [docs](https://svelte.dev/repl/cb31be94ea444b41a11d1320d16ba6dc?version=3.32.3) I was able to implement an api call to [pokeapi.co](https://pokeapi.co/). It took a little while to translate the docs to the object type returned by the pokeapi though. 
- Pagination:
  - Used a for loop to create buttons based on the number of pages required to go through all Pokémon depending on how many Pokemon per page are shown.
  - Pagination on other websites seems to navigate to another route endpoint, example pokemon/page/1.
  - The pagination I implemented keeps the user on the same page.
  - I am not sure if my implementation is ideal. It seems to work fine. lol
- Asset checking:
  - Not sure if this was the best way to accomplish this, but I wanted to check if a pic of a Pokémon existed. The reason for this is because, before doing so if a pic didn't exist, nothing would fill the poke-pic space, which caused the sizing of the cards to be affected in a less than ideal way. The cards would be smaller. So I created an array of strings, based on all the files currently in the images/main_sprites directory. In the for loop, I implemented an if condition that checked whether the pic existed in the array based on the Pokémon’s ID. If it did exist, I passed the path to the pic to the component. If it didn't exist, I passed the pat to a pic containing a question mark to the component.
- Transitions: 
  
  - Svelte transitions (default/simple ones 😅) are seriously insanely easy to implement. For example, for the top-bar this is all that the code for adding a slide transition. lol 
    ```sveltehtml
      <script>
          import { slide } from 'svelte/transition';
    
      </script>
    
      <div transition:slide ></div>
     ```

  - `transition:fade`: This is an easy way to get things to fade in, easy +1 fancy points.