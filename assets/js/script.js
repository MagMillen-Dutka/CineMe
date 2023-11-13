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

