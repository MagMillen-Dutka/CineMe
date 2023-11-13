
// This coding is for the search input by Obi
    var searchForm = document.getElementById('searchForm');
    var searchInput = document.getElementById('searchInput');
    var searchResults = document.getElementById('searchResults');
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const searchQuery = searchInput.value;
    });


function findFilm(event) {
        // This event is needed to stop page refreshing and clearing input. Do not remove.
    event.preventDefault();
    var moviePull = cityInputEl.value;
    searchResponse(moviePull);
}

function searchResponse(){
const url = 'https://movie-search-and-listing-api1.p.rapidapi.com/list_movies.json?limit=10&page=1&quality=All&minimum_rating=8&query_term=0&genre=All&sort_by=date_added&order_by=desc&with_rt_ratings=true';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d043d3c5dmsh97c286e5b040044p104743jsn0014620381b9',
		'X-RapidAPI-Host': 'movie-search-and-listing-api1.p.rapidapi.com'
	}
};

try {
	const response = await.fetch(url, options);
	const result = await.response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


function film(movies) {
    // clear main
    main.innerHTML = "";
    movies.forEach((movies) => {
    // This brings image, film title, vote and description of the film through to the app.
    const { poster_path, title, vote_average, overview } = movies;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <img src="${IMGPATH + poster_path}" alt="${title}"/>
    <div class="movie-info">
    <h3>${title}</h3>
    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
    <h3>Overview:</h3>
    ${overview}
    </div>
    `;
    main.appendChild(movieEl);
    });
    }

function getClassByRate(vote) {
    if (vote >= 7.5) {
    return "green";
    } else if (vote >= 5) {
    return "orange";
    } else {
    return "red";
    }
    }
//added to original code - can be taken out if not working.

