// import fetchBreeds from "./js/cat-api";
 import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_RDzJkzURGbmWQIQ946VNcb7AS8SyxbJd4RjkgNCLGaz1JwIxIF2heBTvfgbSFZSU";
const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_RDzJkzURGbmWQIQ946VNcb7AS8SyxbJd4RjkgNCLGaz1JwIxIF2heBTvfgbSFZSU";

const breedSelector = document.querySelector('.breed-select');

breedSelector.setAttribute("onchange", "showBreedImage(value)");

const catInfo = document.querySelector('.cat-info');
let storedBreeds = []

 fetch(`${url}?api_key=${api_key}`)
 .then((response) => {
   return response.json();
 })
.then((data) => {
   
   //filter to only include those with an `image` object
 //data = data.filter(img=> img.image?.url!=null)
   
 storedBreeds = data;
   
   for (let i = 0; i < storedBreeds.length; i++) {
    const breed = storedBreeds[i];
    let option = document.createElement('option');
     
     //skip any breeds that don't have an image
     if(!breed.image)continue
     
    //use the current array index
    option.value = i;
    option.innerHTML = `${breed.name}`;
breedSelector.appendChild(option);
    
    }
   //show the first breed by default
   showBreedImage(0)
})
.catch(function(error) {
   console.log(error);
});

function showBreedImage(index) { 
    const breedCard = `<img src='${storedBreeds[index].image.url}'>
        <div class='breed-descr'>
            <h1 class='breed-title'>${storedBreeds[index].name}</h1>
            <p>${storedBreeds[index].description}</p>
            <p><b>Temperament:</b> ${storedBreeds[index].temperament}</p>
        </div>`;
    catInfo.innerHTML = breedCard;
}