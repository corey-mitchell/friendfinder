const friendsData = require("../data/friends.js");

module.exports = (app) => {
    app.get('/api/friends', (req, res)=>{
        res.json(friendsData);
    });

    app.post('/api/friends', (req, res)=>{
        friendsData.push(req.body);
    });
};