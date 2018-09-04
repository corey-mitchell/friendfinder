const bodyParser = require("body-parser");
const express = require("express");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());

// imports api route(s)
require('./app/routing/apiRoutes')(app);

// imports page routes from htmlRoutes file
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, ()=>{
    console.log(`App listening on PORT: ${PORT}`);
});