# testing fruits

Tech stack:

- Vue 3+ Composition API
- Nuxt 3
- Tanstack Query
- Typescript

![demo](https://github.com/vitaliiboiko360/tutti-frutti/blob/main/demo/demo-video.gif)

### Link to deployed solution

[https://tutti-fruitti.vercel.app/](https://tutti-fruitti.vercel.app/)

What's has been implemented:

1. Main Page (Home)

   - Fruit cards arranged in a grid
   - Grid is responsive to screen width
   - Filter panel with ranges on nutrition values, filters are applying dynamically

2. Fruit cards
   contains:

   - group link to a corresponding group page

   * star button to add to favorites

     - press button, card added to favorites and link to favorites appears below
     - press button again and card removed from favorites, link disappears

3. Group Page (by family value)

   - group page displays cards with fruits of the same family
   - group page has its header with the name of the group
   - filter and grid display has been reused from the main page 1.
   - fruit card has been reused from 2. with the same functionality

4. Favorites page

   - favorites page displays cards that added using star button on a fruit card
   - fruit card has the same functionality, clicking on start button will remove it from the favorites
   - list of favorites fruits are stored using localStorage, the list retained between page reloads
