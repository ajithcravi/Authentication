const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");
const users = require("./routes/api/users");

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

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server up and running in port ${port}`));