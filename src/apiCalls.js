import { BASE_URL_TRANSLATE, API_KEY_TRANSLATE } from "/src/apiConfig";

function treatHTTPResponseACB(response) {
  if (response.status == 200) return response.json();
  else throw "API error";
}

function getAvailableLanguages() {
  function transformResponseACB(result) {
    function langObjectToStringCB(langObj) {
      return langObj.language
    }
    return result.data.languages.map(langObjectToStringCB)
  }

  return fetch(BASE_URL_TRANSLATE, {
    method: "GET",
    headers: {
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": API_KEY_TRANSLATE,
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
  })
    .then(treatHTTPResponseACB)
    .then(transformResponseACB);
}

export { getAvailableLanguages };
