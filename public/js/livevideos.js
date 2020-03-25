//gets the URL and makes it available to use
const params = window.location.search;
console.log(params);
const urlParams = new URLSearchParams(params);
//gives us the name of the video that was clicked on
const videoName = urlParams.get('videoName');
console.log(videoName);
// alert(videoName);



//images specific to what clicked on
// change /src of activity-image
// maybe function to do it
//const activityImage = $('#activity-image');
// change mySQL image to OOOP image instead
//document.getElementById("imageid").src="../template/save.png";
if (videoName == "sequelize") {
	document.getElementById("activity-image").src="../images/sequelize-logo.jpg";
} 

if (videoName == "express") {
	document.getElementById("activity-image").src="../images/express-logo.png";
	// var imgSrc = '../images/express-logo.png';
	// $('.activity-image').attr('src', imgSrc);
}

if (videoName == "MySQL") {
	document.getElementById("activity-image").src="../images/mysql-logo.png";
}

if (videoName == "Javascript") {
	document.getElementById("activity-image").src="../images/logo-javascript.png";
}


// var imgSrc = '../images/express-logo.png';
// $('.activity-image').attr('src', imgSrc);




// $.ajax({
// 	url    : '/api/' + videoName + 'Table',
// 	method : 'GET'
// }).then(function(data) {
// 	console.log(data);
// });

// if (urlParamsObj['videoName']) {
// 	const activityTitle = urlParamsObj['videoName'];
// }

// console.log(activityTitle);

// this will gather all the data from this activity and make it available to be added to the results website
function getVideo() {
	$.get('/api/' + videoName + 'Table', (data) => {
		console.log(data);
		// expressTable = data;
		// if (!expressTable || !expressTable.length) {
		// 	alert('no activities found, try again later!');
		// } else {
		// 	videoInfo();
		// }
	});
}

getVideo();

function videoInfo() {}

const searchButton = $('form.topicSearch');
const userSearch = $('input#vsearch');

const activityImage = $('#activity-image');
const activityName = $('.activity-name');
const activityTopics = $('.topics');
const activityTime = $('.time-location');
const activityHw = $('.homework');
const activityComment = $('.hint.comment');
const activityFolder = $('.gitlab-folder');

$(document).ready(function() {
	searchButton.on('submit', function(event) {
		event.preventDefault();
		const topic = {
			search : userSearch.val().trim()
		};
		if (topic.search === sequelize) {
			return;
		}
	});

	// This file just does a GET request to figure out which user is logged in
	// and updates the HTML on the page
	$.get('/api/user_data').then(function(data) {
		$('.member-name').text(data.email);
	});
});
