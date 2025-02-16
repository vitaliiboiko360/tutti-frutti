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

   * star button to add to favourites

     - press button, card added to favourites and link to favourites appears below
     - press button again and card removed from favourites, link disappears

3. Group Page (by family value)

   - group page displays cards with fruits of the same family
   - group page has its header with the name of the group
   - filter and grid display has been reused from the main page 1.
   - fruit card has been reused from 2. with the same functionality

4. Favourites page

   - favourites page displays cards that added using star button on a fruit card
   - fruit card has the same functionality, clicking on start button will remove it from the favourites
   - list of favourites fruits are stored using localStorage, the list retained between page reloads

**Comments on solution:**

Focus was on implementing an application that works and completes requested tasks.

It wasn't developed to show flawless code, although code maintainability and readability is important. It is a throw-away code nonetheless.

According to SOLID S-principle, all localStorage related code, ideally has to be decoupled from the rest. Some repetitive code could be extracted into a universal function. Filter code is tightly integrated with Display logic, it complicates their reuse.

There are other projects of mine that you could see here at Github where code quality is maintained a lot more thoroughly.

**Important:**

Solution hasn't used your backend, exactly as you pointed out, because of CORS.

You shouldn't ask your users to install any third-party libraries/extensions/additional software in order to use your services. There are many reasons against it, security, convenience, usability to name a few.

If you foresaw the problem with CORS, why didn't you add all the necessary Headers to allow me to use your backend API, as you're owning that backend API in the first place.

Anyway, I've downloaded data, and put it locally along with the solution. For group pages it just selects proper records to display.

There are some errors in your data too, it breaks grouping, some values have untrimmed spaces.
