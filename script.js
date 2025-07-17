const form = document.querySelector("form");
const add = document.querySelector(".addElement");
const input = document.querySelector("input");
const moviePoster = document.querySelector(".movie-poster");
const img1 = document.querySelector("img");
const container = document.querySelector(".container-center");
const content = document.querySelector(".content-fetch");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (query === '') {
    alert("Search any Movie name while click");
  }
  else {
    fetchMovie(query);
  }
});

const fetchMovie = async (movie) => {
  const apikey = "bfb62548";
  let url = `https://www.omdbapi.com/?apikey=${apikey}&t=${movie}`;
  let promise = await fetch(url);
  let response = await promise.json();
  console.log(response);
  showMovieData(response);
}
const showMovieData = (data) => {
  // container.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.2)";
  container.classList.add("shadow-box");
  // Clear previous results
  add.innerHTML = "";
  moviePoster.innerHTML = "";
  // console.log("content fetch please wait...");
  content.innerText="content fetch please wait...";
  function hello() {

    // Destructure movie details
    const { Poster, Title, Year, Actors, Writer, Director } = data;

    const moviePosterElement = document.createElement("div");
    moviePosterElement.innerHTML = `<img src="${Poster}" alt="${Title} Poster" style="max-width: 110%; height: auto;">`;
    moviePoster.appendChild(moviePosterElement);

    // Create and append movie info
    const infoDiv = document.createElement("div");
    infoDiv.innerHTML = `
      <p><strong>Title:</strong> ${Title}</p>
      <p><strong>Year:</strong> ${Year}</p>
      <p><strong>Actors:</strong> ${Actors}</p>
      <p><strong>Writer:</strong> ${Writer}</p>
      <p><strong>Director:</strong> ${Director}</p>
      `;
    add.appendChild(infoDiv);
    content.style.display="none";
  }
  setTimeout(hello, 4000);
};
