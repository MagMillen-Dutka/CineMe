var searchForm = document.getElementById('search-form');
var searchInput = document.getElementById('search-input');
var searchResults = document.getElementById('search-results');
var tvMazeAPIEl = 'Jdep9pFBwdLLZclOFukZ_VSdjGBpRrLw ';

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const searchQuery = searchInput.value;

  // Fetch movie data from API
  fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`)
    .then(response => response.json())
    .then(data => {
        for(var i=0; i<data.length; i++){
        console.log(data[i].show.image.medium);
        
        var showTitle = document.createElement('h3')
        showTitle.textContent = `${data[i].show.name}`
        searchResults.appendChild(showTitle)
        console.log(showTitle)

        var showRating = document.createElement('h6')
        showRating.textContent = `Rating: ${data[i].show.rating.average}`
        searchResults.appendChild(showRating)
        console.log(showRating)

        var showLocation = document.createElement('h6')
        showLocation.textContent = `${data[i].show.url}`
        searchResults.appendChild(showLocation)
        console.log(showLocation)

        var showCard = document.createElement('img');
        searchResults.appendChild(showCard);
        showCard.setAttribute("src",`${data[i].show.image.medium}`);
        
    }})
    
});