const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'dist');
const port = 80;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
	console.log('*');
	res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
	console.log('Server is up over on PORT: ' + port);
});
