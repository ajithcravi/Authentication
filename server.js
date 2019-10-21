const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app = express();

app.use(
    bodyParser.urlencoded({
        extended : false
    })
);
app.use(
    bodyParser.json()
);

const url = require('./config/keys').mongoURI;

mongoose
    .connect(
        url,
        { useNewUrlParser : true, useUnifiedTopology: true}
    )
    .then(() => console.log('MongoDB connection succesful'))
    .catch(err => console.log(err));

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server up and running in port ${port}`));