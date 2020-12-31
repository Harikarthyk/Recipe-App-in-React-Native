const API_KEY = '12bcc70cb97217567c312085071f6b94';
const API_APP_ID = '3d19e675';

export const getRecipeByQuery = (query) => {
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${API_APP_ID}&app_key=${API_KEY}`;
  return fetch(URL, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch((error) => console.error(error));
};

// const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
