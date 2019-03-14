fetch('examples/example.json')
	.then(function(response) {
		if (!response.ok) {
			throw Error(response.statusText);
		}
		// Do stuff with the response
	})
	.catch(function(error) {
		console.log('Looks like there was a problem: \n', error);
	});
// We can safely use fetch from now on

var json = '{"result":true, "count":42}';
obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

