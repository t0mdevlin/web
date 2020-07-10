var list;

function startTime() {
	var today = new Date();
  	var h = today.getHours();
  	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('time').innerHTML =
	h + "-" + m + "-" + s;
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};  
	return i;
}

function getDay(){
	var day;
	switch (new Date().getDay()) {
	  case 0:
		   day = "Sunday";
		    break;
	  case 1:
	    day = "Monday";
	    break;
	  case 2:
	     day = "Tuesday";
	    break;
	  case 3:
	    day = "Wednesday";
	    break;
	  case 4:
	    day = "Thursday";
	    break;
	  case 5:
	    day = "Friday";
	    break;
	  case 6:
	    day = "Saturday";
	}
	document.getElementById("day").innerHTML = day;
}

function getDate(){
	var now = new Date();

	var date = now.getDate();

	var month;
	switch(now.getMonth()){
		case 0:
			month = "Jan"
			break;
		case 1:
			month = "Feb"
			break;
		case 2:
			month = "Mar"
			break;
		case 3:
			month = "Apr"
			break;
		case 4:
			month = "May"
			break;
		case 5:
			month = "Jun"
			break;
		case 6:
			month = "Jul"
			break;
		case 7:
			month = "Aug"
			break;
		case 8:
			month = "Sep"
			break;
		case 9:
			month = "Oct"
			break;
		case 10:
			month = "Nov"
			break;
		case 11:
			month = "Dec"
			break;
	}

	var year = now.getFullYear();

	document.getElementById("date").innerHTML = date;
	document.getElementById("month").innerHTML = month;
	document.getElementById("year").innerHTML = year;
}

function loadQuote(){
	// var quoteArray = [];
	// $.getJSON("./resources/js/quotes.json"), function(data){
	// 	quoteArray = JSON.parse(data.quotes);
	// 	console.log(quoteArray);
	// };
}

// function getLocation(){
// 	if(navigator.geolocation){
// 		navigator.geolocation.getCurrentPosition(showPosition);
// 	}
// 	else{
// 		alert('problem getting location');
// 	}
// }

// function showPosition(position){
// 	$.ajax({
// 		type: 'GET',
// 		url: "https://geocode.xyz/"+position.coords.latitude+","+position.coords.longitude+"?geoit=JSON"
// 		//dataType: 'JSON',
// 		success: renderInfo(data)
// 	});
// }

// function renderInfo(data){
// 	console.log(data);
// }

// function getWeather(){
// 	$.ajax({
// 		url: weatherURL,
// 		type: 'GET',
// 		dataType: 'json',
// 		success: function(data){
// 			console.log(gotJSON)
// 			list = data == null ? [] : (data instanceof Array ? data : [data]);
// 			console.log(list);
// 		}
// 	});
// }


$(document).ready(function(){
	startTime();
	getDay();
	getDate();
	loadQuote();

});