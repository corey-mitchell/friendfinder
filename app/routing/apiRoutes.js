const friendsData = require("../data/friends.js");

// exports app data to use on survey.html
module.exports = (app) => {
    // Gets friend data from friends.js
    app.get('/api/friends', (req, res)=>{
        res.json(friendsData);
    });

    // Post user answers to friend data in friends.js
    app.post('/api/friends', (req, res)=>{
        console.log(friendsData.map((obj)=>{return obj.score}));

        // Logic to compare user score with friends score... working on.
        const compare = (arr1, arr2)=>{
            const friendScore = friendsData.map((obj)=>{return obj.score});
            const userScore = req.body.score;
            const totalDifferences =[]

            for(const i = 0; i < userScore; i++) {
                if (userScore[i] == friendScore[i]){

                }else{
                    const difference = userScore[i] - friendScore[i];
                    totalDifferences.push(difference);
                };
            };

            return console.log(totalDifferences);
        };

        // Pushes user info into friends data.
        // Added at the bottom to keep user from always comparing with themselves.
        friendsData.push(req.body);
    });
};