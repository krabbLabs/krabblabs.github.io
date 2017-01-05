/**
 * Created by gjpgagno on 12/20/16.
 */

const express = require('express');
const path = require('path');
const port = 8080;

const app = express();

app.use(express.static(__dirname));

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log('Server Started!');