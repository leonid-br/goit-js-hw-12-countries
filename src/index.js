import './sass/main.scss';
import debounce from 'lodash.debounce';
import countrysMarcup from './templates/countrys.hbs';
import countryMarcup from './templates/country.hbs';

  
const refs = {
    inputEl:document.querySelector('#js-input'),
    countrysMarcupEL: document.querySelector('.js-countrys-list')
}

refs.inputEl.addEventListener('input', debounce((()=>{

    fetch(`https://restcountries.eu/rest/v2/name/${refs.inputEl.value}`)
    .then(r => r.json())
    .then(arr => {
      refs.countrysMarcupEL.innerHTML='';
          if (arr.length===1){
            const tmp1 = countryMarcup(arr);
            refs.countrysMarcupEL.insertAdjacentHTML('beforeend', tmp1)
            return}
            if (arr.length>10){alert('введи еще');}
            if (arr.length<=10){ 
                const tmp = countrysMarcup(arr)
                refs.countrysMarcupEL.insertAdjacentHTML('beforeend',tmp)            
              }  
            if (err=404){alert('такой страны нет')}
    }
      )
    
}),500))



    // fetch('https://restcountries.eu/rest/v2/all')
    // .then(r => r.json())
    //   .then(arr => {
    //      const arrName = arr.map(num=>num.name)
    //      return arrName;
    //   })





