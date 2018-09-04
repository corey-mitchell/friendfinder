const path = require('path');

// Exports data to use on the home.html page
module.exports = (app)=>{

// Routes to survey.html
app.get('/survey', (req, res)=>{
    res.sendFile(path.join(`${__dirname}/../public/survey.html`))
});
    
// Routes to home.html (Default)
app.use((req, res)=>{
    res.sendFile(path.join(`${__dirname}/../public/home.html`))
});
};