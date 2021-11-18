import './sass/main.scss';

// Import Function
import fetchCountries from './js/fetchCountries';

// Import Debounce
import debounce from 'lodash.debounce';

// Import Tamplates
import countrysMarcup from './templates/countrys';
import countryMarcup from './templates/country';

// Import Notification
import '@pnotify/core/dist/BrightTheme';
import '@pnotify/core/dist/Material';
import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify';
// import * as PNotify from "@pnotify/core/dist/PNotify";

// Import Variables
import refs from './js/refs';

// Event Handlers
refs.inputEl.addEventListener('input', debounce(onSearch, 1000));

// Functions
function onSearch(e) {
  const country = refs.inputEl.value.trim();
  e.preventDefault();

  fetchCountries(country).then(country => {
    if (country.status === 404) {
      error({
        title: 'Oh No!',
        text: 'This country does not exist',
        delay: 2,
      });
    }
    refs.countrysMarcupEL.innerHTML = '';
    searchCountry(country);
  });
}

function searchCountry(country) {
  const marcupCountry = countryMarcup(country);
  const marcupCountrys = countrysMarcup(country);

  if (country.length === 1) {
    refs.countrysMarcupEL.insertAdjacentHTML('beforeend', marcupCountry);
    return;
  }
  if (country.length > 10) {
    alert({
      title: 'Notification',
      text: 'Enter more letters',
      delay: 2,
    });
  }
  if (country.length <= 10) {
    refs.countrysMarcupEL.insertAdjacentHTML('beforeend', marcupCountrys);
  }
  if (refs.inputEl.value !== '' && country.length === 0) {
    error({
      title: 'Oh No!',
      text: 'This country does not exist',
      delay: 2,
    });
  }
}
