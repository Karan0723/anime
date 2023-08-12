

const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgeEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");


btnEl.addEventListener("click", async function () {
    try {

        btnEl.disabled = true;
        btnEl.innerText = "Loading.."
        animeNameEl.innerText = "Updating..";
        animeImgeEl.src = "loading.svg";

        const response = await fetch("https://api.catboys.com/img")
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime"

        animeContainerEl.style.display = "block";
        animeImgeEl.src = data.url;
        animeNameEl.innerText = data.artist;

    } catch (error) {

        btnEl.disabled = false;
        btnEl.innerText = "Get Anime"
        animeNameEl.innerText = "Error , Please try again";


    }
});