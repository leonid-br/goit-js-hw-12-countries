import './sass/main.scss';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import countrysMarcup from './templates/countrys.hbs';
import countryMarcup from './templates/country.hbs';
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/Material.css";
import { alert, error, defaultModules } from "@pnotify/core/dist/PNotify.js";
  
const refs = {
    inputEl:document.querySelector('#js-input'),
    countrysMarcupEL: document.querySelector('.js-countrys-list')
}
refs.inputEl.addEventListener('input', debounce(onSearch,500))




function onSearch(e) {
  const country = refs.inputEl.value;
  e.preventDefault();
  
  fetchCountries(country)
  .then(country=>{
    const tmp1 = countryMarcup(country);
    refs.countrysMarcupEL.innerHTML=''

    if (country.length===1){           
    refs.countrysMarcupEL.insertAdjacentHTML('beforeend', tmp1)
    return}
    if (country.length>10){alert('введи еще буковок');}
    if (country.length<=10){ 
         const tmp = countrysMarcup(country)
         refs.countrysMarcupEL.insertAdjacentHTML('beforeend',tmp)   
        }  
  })

}


// refs.inputEl.addEventListener('input', debounce((()=>{

//     fetch(`https://restcountries.eu/rest/v2/name/${refs.inputEl.value}`)
//     .then(r => r.json())
//     .then(arr => {
//       refs.countrysMarcupEL.innerHTML='';
//           if (arr.length===1){
//             const tmp1 = countryMarcup(arr);
//             refs.countrysMarcupEL.insertAdjacentHTML('beforeend', tmp1)
//             return}
//             if (arr.length>10){alert('введи еще буковок');}
//             if (arr.length<=10){ 
//                 const tmp = countrysMarcup(arr)
//                 refs.countrysMarcupEL.insertAdjacentHTML('beforeend',tmp)            
//               }  
           
//     }
//       )
//     .catch(err=>{
//         console.log(err);
//         alert('Такой страны нет')})
    
// }),1000))









