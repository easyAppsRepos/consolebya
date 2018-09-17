const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
//const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:3003'}));



// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));



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
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));