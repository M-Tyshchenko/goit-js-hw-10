const e=document.querySelector(".breed-select"),t=document.querySelector(".cat-info");document.querySelector(".loader"),document.querySelector(".error");let n=[],c=null;fetch("https://api.thecatapi.com/v1/breeds?api_key=live_RDzJkzURGbmWQIQ946VNcb7AS8SyxbJd4RjkgNCLGaz1JwIxIF2heBTvfgbSFZSU").then((e=>e.json())).then((t=>{n=t,console.log(n),n.forEach((t=>{let n=document.createElement("option");n.value=`${t.id}`,n.innerHTML=`${t.name}`,e.appendChild(n)}))})).catch((e=>console.log(e))),e.addEventListener("change",(e=>{let n=e.target.value;console.log(n),fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_RDzJkzURGbmWQIQ946VNcb7AS8SyxbJd4RjkgNCLGaz1JwIxIF2heBTvfgbSFZSU&breed_ids=${n}`).then((e=>e.json())).then((e=>{c=e[0],console.log(...c.breeds);const n=`<img src='${c.url}'>\n        <div class='breed-descr'>\n            <h1 class='breed-title'>${c.breeds[0].name}</h1>\n            <p>${c.breeds[0].description}</p>\n            <p><b>Temperament:</b> ${c.breeds[0].temperament}</p>\n        </div>`;t.innerHTML=n})).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.3456dcfd.js.map