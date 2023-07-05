import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {fetchBreeds, fetchCatByBreed} from "./js/cat-api";

const breedSelector = document.querySelector('.breed-select');
breedSelector.hidden = true;

Loading.circle('Loading data, please wait...',
  {
    fontFamily: 'Roboto, sans-serif',
    svgColor: '#dcdcdc',
  });
setTimeout(() => {
    fetchBreeds();
    setTimeout(() => {
      Loading.remove();
    }, 1000);
  }, 2000); 


breedSelector.addEventListener('change', (event) => {
  
  let breedId = event.target.value;
  console.log(breedId);

  Loading.circle('Loading data, please wait...',
    {
    fontFamily: 'Roboto, sans-serif',
    svgColor: '#dcdcdc',
  });

  setTimeout(() => {
    fetchCatByBreed(breedId);
    setTimeout(() => {
      Loading.remove();
    }, 1000);    
  }, 2000);    

});
