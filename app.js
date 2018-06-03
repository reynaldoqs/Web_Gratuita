const express = require('express');
const app = express();
const opn = require('opn');

// opens the url in the default browser 
const PORT = 3001;
app.use(express.static('public'));
app.use(express.static('files'));
app.use('/static', express.static(__dirname + '/public'));
app.listen(PORT, () => {
    console.log('App is running at \x1b[33m%s\x1b[0m', `localhost:${PORT}`);
    opn(`http://localhost:${PORT}/`);
});