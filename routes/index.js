const express = require('express');
const router = express.Router();

const api = require('./api.js');

router.use((req, res, next ) => {
	console.log("we got this far!!!")
	next()
})

router.use('/api', api);

module.exports = router;
