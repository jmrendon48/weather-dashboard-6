// global variables
var apiKey = "1b18ce13c84e21faafb19c931bb29331";
var savedSearches = [];

// make list of previously searched cities
var searchHistoryList = function(cityName) {
    // create entry with city name
    var searchHistoryEntry = $("<p>");
    searchHistoryEntry.addClass("past-search");
    searchHistoryEntry.text(cityName);

    // create container for entry
    var searchEntryContainer = $("<div>");
    searchEntryContainer.addClass("past-search-container");

    // append entry to container
    searchEntryContainer.append(searchHistoryEntry);

    // append entry container to search history container
    var searchHistoryContainer = $("#search-history-container");
    searchHistoryContainer.append(searchEntryContainer);
};

var currentWeatherSection = function(cityName) {
    console.log(cityName);

    // get and use data from open weather current weather api end point
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        // get response and turn it into objects
        .then(function(response) {
            return response.json();
        })
        // get city's longitude and latitude
        .then(function(response) {
            var cityLon = response.coord.lon;
            var cityLat = response.coord.lat;
            console.log(cityLon);
            console.log(cityLat);

            // fetch(`http://`)
        });
};

$("#search-form").on("submit", function() {
    event.preventDefault();
    
    // get name of city searched
    var cityName = $("#search-input").val();

    searchHistoryList(cityName);

    currentWeatherSection(cityName);
});