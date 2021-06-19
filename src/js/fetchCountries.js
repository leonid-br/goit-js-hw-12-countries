const BASE_URL = 'https://restcountries.eu/rest/v2/name/';
const CEARCH = '?fields=name;population;flag;languages;capital'


export default function fetchCountries(searchCountry) {
  const url = `${BASE_URL}${searchCountry}${CEARCH}`;

    return fetch(url)
      .then(response => {
        if(response.ok){
          return response.json()}
        else{return []}
        } )
   
} 




