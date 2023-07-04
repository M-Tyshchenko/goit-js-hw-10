import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

const baseUrl = `https://api.thecatapi.com/v1`;
const apiKey = "live_RDzJkzURGbmWQIQ946VNcb7AS8SyxbJd4RjkgNCLGaz1JwIxIF2heBTvfgbSFZSU";

const breedSelector = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

let breedsArr = [];
let breedInfo = null;

export function fetchBreeds() {
    fetch(`${baseUrl}/breeds?api_key=${apiKey}`)
        .then((response) => { return response.json(); })
        .then((breedsData) => {
          breedsArr = breedsData;
          console.log(breedsArr);
          breedsArr.forEach((breed) => {
            let option = document.createElement('option');          
            option.value = `${breed.id}`;
            option.innerHTML = `${breed.name}`;
            breedSelector.appendChild(option);
          })
        })
      .catch(err => {        
        Report.failure(
          'Oops!',
          'Something went wrong! Try reloading the page!'
        );
        console.log(err)
      });
}

export function fetchCatByBreed(breedId) {
    fetch(`${baseUrl}/images/search?api_key=${apiKey}&breed_ids=${breedId}`)
      .then((response) => { return response.json(); })
      .then((breedData) => {
        breedInfo = breedData[0];
   
        console.log(...breedInfo.breeds);
        const breedCard = `<img src='${breedInfo.url}'>
        <div class='breed-descr'>
            <h1 class='breed-title'>${breedInfo.breeds[0].name}</h1>
            <p>${breedInfo.breeds[0].description}</p>
            <p><b>Temperament:</b> ${breedInfo.breeds[0].temperament}</p>
        </div>`;
        catInfo.innerHTML = breedCard;
    
      })
      .catch(err => {
        Report.failure(
          'Oops!',
          'Something went wrong! Try reloading the page!'

)
        console.log(err)
      });
}