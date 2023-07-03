import axios from "axios";

const url = 'https://api.thecatapi.com/v1/breeds';
axios.defaults.headers.common["x-api-key"] = "live_RDzJkzURGbmWQIQ946VNcb7AS8SyxbJd4RjkgNCLGaz1JwIxIF2heBTvfgbSFZSU";
let storedBreeds = [];


export const fetchBreeds = catsData => {
    fetch(`${url}?api_key=${axios.defaults.headers.common["x-api-key"]}&breed=${catsData}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(catsData => {
            storedBreeds = catsData;
            for (let i = 0; i < storedBreeds.length; i++) {
    const breed = storedBreeds[i];
    let option = document.createElement('option');
   
    //use the current array index
    option.value = i;
    option.innerHTML = `${breed.name}`;
document.getElementById('breed_selector').appendChild(option);
    
    }
   //show the first breed by default
   showBreedImage(0)
})
        
        .catch(error => {
            console.log(error);
        });
}

function showBreedImage(index)
{ 
  const breedImg = document.createElement('img');
  breedImg.src= storedBreeds[index].image.url;
  document.querySelector('.cat-info').append(breedImg);
 
  const breedDescr = `<div class='breed-descr'><h1 class='breed-title'>${storedBreeds[index].name}</h1><p>${storedBreeds[index].description}</p><p><b>Temperament:</b> ${storedBreeds[index].temperament}</p></div>`;

document.querySelector('.cat-info').insertAdjacentHTML("beforeend", breedDescr);
  
  // document.getElementById("breed_json").textContent= storedBreeds[index].temperament
  // document.getElementById("breed_json").textContent= storedBreeds[index].description
  

}

