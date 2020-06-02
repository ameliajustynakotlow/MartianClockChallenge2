

var today = new Date();
//var marsStart = new Date(1970,3,28); //the official date of the beginning of year 0
// MARS

document.getElementById('GMT').innerHTML = today.toString();

//var dateBox = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();
//document.getElementById('dateBox').innerHTML = today.getDate();

//document.getElementById('dayName').innerHTML = today.getDay();

//var dateText = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();
//document.getElementById('date').innerHTML = today.getDate();

//alert((marsStart.getTime())/1000/60/60/24);
//document.getElementById('days').innerHTML = Math.round(marsStart.getTime()/1000/60/60/24);
//document.getElementById('earthDays').innerHTML = Math.round(today.getTime()/1000/60/60/24);

//var marsYear = Math.round(marsStart.getTime()/1000/60/60/24);
//var earthDays = Math.round(today.getTime()/1000/60/60/24);
//var marsDays = earthDays.getTime() - marsYear.getTime() + 'days on Mars';
//document.getElementById('marsDays').innerHTML = marsDays.getTime();

//document.getElementById('daysOnMars').innerHTML = Math.round((today.getTime()/1000/60/60/24)-117);


// ------------------------------- TIMER -------------------------------

//var startTime = 0;
//var stopwatchHandle;

//function updateWatch(){
//	var today = new Date();
//	var milliseconds = today.getTime() - startTime.getTime();
//	seconds = Math.round(milliseconds/1000);
//	minutes = Math.round(seconds/60);
//	hours = Math.round(minutes/60);
//	stopwatchHandle = setInterval(updateWatch, 1000);
//	document.getElementById('watch').innerHTML = hours + '-' + minutes + '-' + seconds;
//}

var startTime = 0;
var stopwatchHandle;
var falcon = document.getElementById('falcon');

function updateStopwatch(){
	var currentTime = new Date();
	//compare current time with this what has passed
	//will constantly ask question "What is the time?"
	var milliSeconds = currentTime.getTime() - startTime.getTime();
	//so we're creating the equation
	//very important lines!

	//but that's in miliseconds, but when i want seconds, i need to /1000
	seconds = Math.round(milliSeconds/1000);
	document.getElementById('stopwatch').innerHTML = seconds + ' seconds';
}

document.getElementById('start').onclick = function(){
	startTime = new Date();
	stopwatchHandle = setInterval(updateStopwatch, 1000);
	//it will continuosly count the time that way
	launch.style.animationPlayState='running';
};

document.getElementById('stop').onclick = function(){
	clearInterval(stopwatchHandle);
};

document.getElementById('launch').onclick = function(){
	document.getElementById('falcon').style.animationPlayState = 'running';
};
