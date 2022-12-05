import {
  BASE_URL_TRANSLATE,
  BASE_URL_GET_LANG,
  API_KEY_GOOGLE,
} from "/src/apiConfig";

function treatHTTPResponseACB(response) {
  if (response.status == 200) return response.json();
  else throw "API error";
}

function getAvailableLanguages() {
  function transformResponseACB(result) {
    function langObjectToStringCB(langObj) {
      return langObj.language;
    }
    return result.data.languages.map(langObjectToStringCB);
  }

  return fetch(BASE_URL_GET_LANG, {
    method: "GET",
    headers: {
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": API_KEY_GOOGLE,
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
  })
    .then(treatHTTPResponseACB)
    .then(transformResponseACB);
}

function translateWord(sourceLang, targetLang, word) {
  function transformResponseACB(result) {
    return result.data.translations[0].translatedText;
  }

  const encodedParams = new URLSearchParams();
  encodedParams.append("source", sourceLang);
  encodedParams.append("target", targetLang);
  encodedParams.append("q", word);

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": API_KEY_GOOGLE,
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: encodedParams,
  };

  return fetch(BASE_URL_TRANSLATE, options)
    .then(treatHTTPResponseACB)
    .then(transformResponseACB);
}

export { getAvailableLanguages, translateWord };
