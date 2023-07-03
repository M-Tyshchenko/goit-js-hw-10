//import {fetchBreeds} from "./js/cat-api";

const breedSelector = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loaderMsg = document.querySelector('.loader');
const errorMsg = document.querySelector('.error');

const baseUrl = `https://api.thecatapi.com/v1`;
const apiKey = "live_RDzJkzURGbmWQIQ946VNcb7AS8SyxbJd4RjkgNCLGaz1JwIxIF2heBTvfgbSFZSU";

let breedsArr = [];
let breedInfo = null;
    fetch(`${baseUrl}/breeds?api_key=${apiKey}`)
        .then((response) => { return response.json(); })
        .then((breedsData) => {
          breedsArr = breedsData;
          console.log(breedsArr);
          breedsArr.forEach((breed) => {
            let option = document.createElement('option');
            // if (!breed.image) {
            //   continue;
            // }
            option.value = `${breed.id}`;
            option.innerHTML = `${breed.name}`;
            breedSelector.appendChild(option);
          })
        })
        .catch(err => console.log(err));

breedSelector.addEventListener('change', (event) => {
  
  let breedId = event.target.value;
  console.log(breedId);

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
    //       })
        })
        .catch(err => console.log(err));

});


// [{
//   "breeds": [{
//     "weight": { "imperial": "8 - 15", "metric": "4 - 7" },
//     "id": "asho",
//     "name": "American Shorthair",
//     "cfa_url": "http://cfa.org/Breeds/BreedsAB/AmericanShorthair.aspx",
//     "vetstreet_url": "http://www.vetstreet.com/cats/american-shorthair",
//     "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/american-shorthair",
//     "temperament": "Active, Curious, Easy Going, Playful, Calm",
//     "origin": "United States",
//     "country_codes": "US",
//     "country_code": "US",
//     "description": "The American Shorthair is known for its longevity, robust health, good looks, sweet personality, and amiability with children, dogs, and other pets.",
//     "life_span": "15 - 17",
//     "indoor": 0,
//     "lap": 1,
//     "alt_names": "Domestic Shorthair",
//     "adaptability": 5,
//     "affection_level": 5,
//     "child_friendly": 4,
//     "dog_friendly": 5,
//     "energy_level": 3,
//     "grooming": 1,
//     "health_issues": 3,
//     "intelligence": 3,
//     "shedding_level": 3,
//     "social_needs": 4,
//     "stranger_friendly": 3,
//     "vocalisation": 3,
//     "experimental": 0,
//     "hairless": 0,
//     "natural": 1,
//     "rare": 0,
//     "rex": 0,
//     "suppressed_tail": 0,
//     "short_legs": 0,
//     "wikipedia_url": "https://en.wikipedia.org/wiki/American_Shorthair",
//     "hypoallergenic": 0,
//     "reference_image_id": "JFPROfGtQ"
//   }],
//   "id": "8NdgktL3E",
//   "url": "https://cdn2.thecatapi.com/images/8NdgktL3E.jpg",
//   "width": 2716,
//   "height": 1810
// }]