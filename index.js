fetch('examples/example.json')
	.then(function(response) {
		if (!response.ok) {
			throw Error(response.statusText);
		}
		// Do stuff with the response
	})
	.catch(function(error) {
		console.log('Shit It Fucked Up Bro!: \n', error);
	});
// We can safely use fetch from now on

var json = '{"result":true}';
obj = JSON.parse(json);

console.log(obj.count);
// expected output:

console.log(obj.result);
// expected output: true

