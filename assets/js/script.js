var searchForm = document.getElementById('search-form');
var searchInput = document.getElementById('search-input');
var searchResults = document.getElementById('cardsContainer');
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

      
        var showCard = document.createElement('img');
        showCard.setAttribute("src",`${data[i].show.image.medium}`);
        showCard.onclick = function() {
            location.href = `${data[i].url}`;
        };
        searchResults.appendChild(showCard);
        // a.appendChild(link);
        // a.title = "Click here to view show!";
        // a.href = `${data[i].show.url}`;
        // document.cardsContainer.prepend(a);
        
        // var showCard = document.createElement('img');
        // searchResults.appendChild(showCard);
        // showCard.setAttribute("src",`${data[i].show.image.medium}`);
        
    }})
});

// var a = document.createElement('a');
// var link = document.createTextNode("Click here to view show!");

// var showLocation = document.createElement('h6');
 // showLocation.textContent = `${data[i].show.url}`
 // searchResults.appendChild(showLocation)
        // console.log(showLocation)