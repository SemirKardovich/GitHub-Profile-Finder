fetch("https://referential.p.rapidapi.com/v1/timezone?fields=offset%2Cdaylights_offset%2Cdaylights%2Cdaylights_code%2Ctimezone&lang=de", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "32213ffac4mshe7815035cb0c029p1d511bjsn60b02e8cf927",
		"x-rapidapi-host": "referential.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});