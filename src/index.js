import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {fetchBreeds, fetchCatByBreed} from "./js/cat-api";

const breedSelector = document.querySelector('.breed-select');

fetchBreeds();

breedSelector.addEventListener('change', (event) => {
  
  let breedId = event.target.value;
  console.log(breedId);

  Loading.circle('Loading data, please wait...', {
    fontFamily: 'Roboto, sans-serif',
    svgColor: '#dcdcdc',
  });

  setTimeout(() => {
    fetchCatByBreed(breedId);
    Loading.remove();
  }, 2000);    

});
