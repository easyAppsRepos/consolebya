const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
var fs = require('fs');
var https = require('https');
const app = express();

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

const server = http.createServer(app);

const serverHttps = https.createServer(https_options,app);

serverHttps.listen(443, () => console.log(`Running on localhost:8443`));


server.listen(port, () => console.log(`Running on localhost:${port}`));




