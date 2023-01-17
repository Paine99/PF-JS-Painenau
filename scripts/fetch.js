//fetch
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'youtube-video-info.p.rapidapi.com'
	}
};

fetch('https://youtube-video-info.p.rapidapi.com/video_formats?video=DHBFtGhvPtc', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  //fetch
  