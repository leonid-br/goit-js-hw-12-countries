const BASE_URL = 'https://restcountries.eu/rest/v2/name/';


export default function fetchCountries(searchCountry) {
  const url = `${BASE_URL}${searchCountry}`;

    return fetch(url)
      .then(response => {return response.json()} )
   
} 




