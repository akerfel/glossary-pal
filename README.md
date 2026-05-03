# glossary-pal

Glossary Pal is a website for creating and reviewing glossary lists in order for users to learn new languages, with built-in translation using the Google Translate API. We recommend that you do not save any sensitive information on this site as it is currently in early stages of development.

## Automatic translation

The webpage can suggest translations during the creation of glossary lists, which is possible through calls to the Google Translate API. See an example below.

![NVIDIA_Share_p7aW1nT0vF](https://user-images.githubusercontent.com/45148959/208526881-7f7f8e69-7c70-4eb7-a9dc-8a1bd7537fb3.gif)

## File structure
The src folder contains the main structure: assets, router, presenters, and views. Core files like App.vue and main.js serve as the application’s entry point and main framework.

GlossaryModel.js and Deck.js define the data models, while utility scripts (apiCalls.js, resolvePromise.js, langCodesMap.js) support presenter logic. The router’s index.js configures application routes.

Presenters (HomePresenter, CreateDeckPresenter, ReviewDeckPresenter, PostReviewViewPresenter) handle most business logic, managing one or more views. Views primarily define UI components, except for promiseNoData.vue, which shows loading and error states during async operations.

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

### Deploy website through firebase

First setup firebase integration through https://firebase.google.com/. This includes running `firebase init`. Then compile and minifiy for production (see above). Finally, run the following command.

```sh
firebase deploy
```

The website will now be live. The URL we have used is [https://glossary-pal.web.app](https://glossary-pal.web.app).

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
