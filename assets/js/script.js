
// This coding is JQuery for pulling API into code.
const settings = {
	async: true,
	crossDomain: true,
	url: 'https://movie-search-and-listing-api1.p.rapidapi.com/list_movies.json?limit=10&page=1&quality=All&minimum_rating=8&query_term=0&genre=All&sort_by=date_added&order_by=desc&with_rt_ratings=true',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d043d3c5dmsh97c286e5b040044p104743jsn0014620381b9',
		'X-RapidAPI-Host': 'movie-search-and-listing-api1.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

// OR fetch API coding below as alternative

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
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
    
//added to original code - can be taken out if not working.
fetch(url)
    .then(function (response) {
        return response.json();
    })
}
