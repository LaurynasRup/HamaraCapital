const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
app.use(cors());

//Redirect to https
app.use((req, res, next) => {
	if (req.header('x-forwarded-proto') !== 'https') {
		res.redirect(`https://${req.header('host')}${req.url}`);
	} else {
		next();
	}
});

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// Run Server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
