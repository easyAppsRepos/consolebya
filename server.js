const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
var fs = require('fs');
var https = require('https');
const app = express();

  httpApp = express();

	httpApp.set('port', 80);
	httpApp.get("*", function (req, res, next) {
	res.redirect("https://" + (req.headers.host || '').replace(/^www\./, '') + req.path);
	});



// API file for interacting with MongoDB
//const api = require('./server/routes/api');
var https_options = {
  key: fs.readFileSync("../private.key"),
  cert: fs.readFileSync("../_yourbeauty_com_pa.crt"),
  ca: [
          fs.readFileSync('../COMODO_RSA_Certification_Authority.crt'),
          fs.readFileSync('../AddTrust_External_CA_Root.crt') 
       ]

};

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var cors = require('cors');

// use it before all route definitions
//app.use(cors({origin: 'https://localhost:3003'}));



// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, './gestion/dist')));



// Send all other requests to the Angular app
/*
app.get('*', (req, res) => {
	console.log(req.subdomains);
    res.sendFile(path.join(__dirname, './dist/index.html'));
});
*/

app.get('*', (req, res) => {


        


			console.log(req.subdomains);
		console.log(req.subdomains[1] == 'gestion');


	if(req.subdomains[1]=='gestion'){
		res.sendFile(path.join(__dirname, './gestion/dist/index.html'));
	}
	else{
		res.sendFile(path.join(__dirname, './dist/index.html'));
	}

    
});


//Set Port
const port = process.env.PORT || '80';
//app.set('port', port);
/*
http.createServer((req, res) => {
  res.writeHead(301,{Location: `https://${req.headers.host}${req.url}`});
  res.end();
});
*/
//const server = http.createServer(app);

/*
var server = http.createServer((req, res) => {
  res.writeHead(301,{Location: `https://`+(req.headers.host || '').replace(/^www\./, '')+req.url});
  res.end();
});
server.listen(port, () => console.log(`Running on localhost:${port}`));

*/

http.createServer(httpApp).listen(80, function() {
    console.log('Express HTTP server listening on port ' + httpApp.get('port'));
});


const serverHttps = https.createServer(https_options,app);

serverHttps.listen(443, () => console.log(`Running on localhost:8443`));






