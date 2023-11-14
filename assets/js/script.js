var searchForm = document.getElementById('search-form');
var searchInput = document.getElementById('search-input');
var searchResults = document.getElementById('search-results');
var trendingMovieEl=document.getElementById('trending-movies');
var tvMazeAPIEl = 'Jdep9pFBwdLLZclOFukZ_VSdjGBpRrLw ';

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const searchQuery = searchInput.value;

  // Fetch movie data from API
  fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      // Filter the movie data based on the search query
      const filteredResults = data.filter(result => result.show.name.toLowerCase().includes(searchQuery.toLowerCase()));

      console.log(data);

      
      // Display the filtered movie results to the user
      searchResults.innerHTML = '';
      filteredResults.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.textContent = result.show.name;
        searchResults.appendChild(resultElement);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

// Code below here is for showing the rating - Needs amendments to fit code above

const APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("content");
const form = document.getElementById("form");
const search = document.getElementById("search");

// Code missing here to tie the 2nd API to the vote code below.

    function getClassByRate(vote) {
    if (vote >= 8) {
    return "green";
    } else if (vote >= 5) {
    return "orange";
    } else {
    return "red";
    }
    }
