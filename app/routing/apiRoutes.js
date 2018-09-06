const path = require('path');
const friendsData = require("../data/friends.js");

// exports API routes
module.exports = (app) => {
    // Gets friend data from friends.js
    app.get('/api/friends', (req, res)=>{
        res.json(friendsData);
    });

    // Post user answers to friend data in friends.js
    app.post('/api/friends', (req, res)=>{
        const userScore = req.body.score;

        let matchName = '';
        let matchImage = '';
        let totalDifference = 100;
        // Gets data from possible friends
        for(let i = 0; i < friendsData.length; i++) {
            // console.log(friendsData[i]);
            let diff = 0;

            // Gets absolute value of difference between friend's score and user score
            for(let j = 0; j < userScore.length; j++) {
                diff += Math.abs(friendsData[i].score[j] - userScore[j]);
                // console.log(diff)
            };
            // console.log(diff);

            if(diff < totalDifference) {
                // totalDifference = diff;
                // console.log(totalDifference);
                totalDifference = diff;
                matchName = friendsData[i].name;
                matchImage = friendsData[i].photo;
            };
        };

        // Pushes user info into friends data.
        // Added at the bottom to keep user from always comparing with themselves.
        friendsData.push(req.body);

        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
    });
};