# glossary-pal

Glossary Pal is a website for creating and reviewing glossary lists. Try it out on [https://glossary-pal.web.app](https://glossary-pal.web.app). 

This site is just a prototype, and therefore we do not recommend signing up with your real email or any password you might have used elsewhere, because of security issues. Any fake email will work.

## Automatic translation

The webpage can suggest translations during the creation of glossary lists, which is possible through calls to the Google Translate API. See an example below.

![firefox_Z94ZbTdXNC](https://user-images.githubusercontent.com/45148959/205668260-98f8a0eb-dedf-495d-bb7a-25c8e757e2a3.gif)

## Target groups

Our main target groups are middle school and high school students who need to learn glossary words for homework. Our reasoning behind our design philosophy for these groups is that students probably want to be done with their homework as quickly as possible. Therefore, we have tried to create a minimalistic design, which is easy to understand at once. We have also tried to declutter all pages in order to make everything more intuitive. Because of this, students will quickly understand how to use the website, and thus be able to finish their homework faster. The API-integration with automatic translation also helps speed up the process of finishing your homework.

## Mid-project status
So far we have a home view, where you can see your current decks; a create a deck view where you can create a new deck; and a review view, where you can review the words in a deck. The functionality for all three views is more or less done, but may need some touching up. The create a deck view contains the API calls: we make calls to the Google Translate API in order to get the languages that the service can translate, and to translate words which the user has inputted.

The major areas left are: user implementation (sign in, registration views) and persistence (using Firebase). There are also some additional features that we may implement, such as being able to edit an already created deck, and reviewing the words you missed once more after a session (see GitHub issues).

## File structure
Everything interesting is in the src folder, where we have the folders "assets", "router", "presenters", and "views". Outside of these folders we have general Javascript code and "root" files such as App.vue and main.js.

main.js and App.vue are the backbones of the application, serving as the entry and main execution. GlossaryModel.js and Deck.js are the model files, defining the classes that are used throughout the project. apiCalls.js, resolvePromise.js, and langCodesMap.js are general Javascript code which simplifies the logic in the presenters.

index.js in the router folder is just a vue router, defining the paths (currently "/", "/create", and "/review") of the application.

For the presenters we have: HomePresenter, CreateDeckPresenter, ReviewDeckPresenter, and PostReviewViewPresenter. Each serve as a presenter either for one view, or in the case of CreateADeck, two (which ones should be obvious). Most application logic is handled here.

As for the views, most do what you think they do: define the view but not much else. The odd one out is promiseNoData.vue, which is used in createADeckPresenter to render a loading icon while the promise is resolving (and an error if it fails). 

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
