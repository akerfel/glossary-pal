import { BASE_URL_TRANSLATE, API_KEY_TRANSLATE } from "/src/apiConfig";

function getAvailableLanguages() {
  return fetch(BASE_URL_TRANSLATE, {
    method: "GET",
    headers: {
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": API_KEY_TRANSLATE,
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

export { getAvailableLanguages };
