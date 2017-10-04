const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app  = express();
const db = require('../models/index.js').db;



(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, "..", "public")));

app.use(morgan);

app.use((req, res, next) => {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
})



app.use((err, req, res, next) => {
	res.status(err.status || 500)
	console.error(err);
	res.send({
		message: "Internal Server Error..."
	})
})

let port = 3000;

app.listen(3000, () => {
	console.log(`Server is listening on port ${port}`);
	db
	.sync()
	.then(function() {
      console.log("Synchronated the database");
    })
    .catch(function(err) {
      console.error("Trouble right here in River City", err, err.stack);
    });
})

