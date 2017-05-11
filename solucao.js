//JSON

var arquivojson= __dirname + '/numeros.json';
var json =  lerJSONComRequire (arquivojson);

console.log(json[1].value);

function LerJson(arquivojson) {

	var json =  require (arquivojson);
	return json;
}

//CSV

var arquivocsv = __dirname + '/numeros.csv';

function LerCSV(arquivocsv){
var fs = require('fs');
var csv = require('csv-string');


var resultado;

fs.readfile(arquivocsv, 'utf8', (err, data) => {
    resultado = csv.parse(data);
    console.log(resultado);
    console.log(resultado[1][0]);
});
}

//XML

var arquivoxml= __dirname + '/numeros.xml';

lerXML(arquivoxml, function(err, data) {
    console.log(data);
});

function lerXML(arquivoxml, funcao) {
    var fs = require('fs');
    var xmlReader = require('read-xml');

    fs.readFile(arquivoxml, function(err, data) {
        xmlReader.readXML(data, funcao);
    });
}