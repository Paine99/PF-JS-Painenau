//fetch
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a477d8dcfmsh50194df537f9b2ap128a7ejsncf6739276fb6',
		'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
	}
};

fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  //fetch

  