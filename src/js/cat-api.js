import axios from "axios";

const url = 'https://api.thecatapi.com/v1/breeds';
axios.defaults.headers.common["x-api-key"] = "live_RDzJkzURGbmWQIQ946VNcb7AS8SyxbJd4RjkgNCLGaz1JwIxIF2heBTvfgbSFZSU";
let storedBreeds = [];

export const fetchBreeds = catsData => {
    fetch(`${url}?q=`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(catsData => {
            console.log(catsData);
            storedBreeds = catsData;
            console.log(storedBreeds);
        })
        .catch(error => {
            console.log(error);
        });
}

// fetch(`${url}`)
//   .then(response => { 
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(catsData => {
//     console.log(catsData);
//     storedBreeds = catsData;
//     console.log(storedBreeds);
//     })
//     .catch(error => {
//         console.log(error);
//     });