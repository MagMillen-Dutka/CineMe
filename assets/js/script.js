
var searchForm = document.getElementById('#searchForm2');
var searchInput = document.getElementById('#searchInput-2');
var searchResults = document.getElementById('#searchResults');
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

      console.log(response);
      
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