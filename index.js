var fs = require('fs');
var colors = require('colors');



fs.readFile('./tekst.txt','utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
});

fs.readdir('./', function(err, files) {
	console.log('Pliki w folderze:\n'.blue);
    console.log(colors.yellow(files + '\n'));
    
	fs.writeFile('./tekst.txt', (files + '\n'), function(err) {
		fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
			console.log('Dane po zapisie:\n'.blue);
			console.log(colors.green(data));
		});
	});
});