var quoteURL = "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote";

function startTime() {
	var today = new Date();
  	var h = today.getHours();
  	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('time').innerHTML =
	h + ":" + m ;
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};  
	return i;
}

function getQuote(){
	$.ajax({
		type:'GET',
		url: quoteURL,
		dataType: "json",
		success: function(data){
			var generatedQuote = data.starWarsQuote;
			document.getElementById('quote').innerHTML = generatedQuote;
		}
	});
	//var x = JSON.parse($('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote').html());
	//console.log(x.starWarsQuote);
}

function getLocation(){

}

function getWeatherInfo(){

}

$(document).ready(function(){
	startTime();
	getQuote();
	//getLocation();
	//getWeatherInfo();
});


//Weather API call
//http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=a974c357f09e5174f3e10fe54dba404a