# Friend Finder

## Description
*Friend Finder* is an application that matches friends based on the user's responses to a ten question survey. The user will answer questions on a scale of 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is finished, an existing user who's answers are closest to the current user will be found and displayed. The closest set of user responses is defined as the set with the least absolute difference for all ten questions combined.

## Demo

Please check out the demo that is deployed to Heroku, [here.](https://friend-finder-supreme.herokuapp.com/)

## Installation

To install the application please run the following in your Bash terminal:

```
git clone git@github.com:corey-mitchell/friendfinder.git

cd friendfinder

npm install
```

## Running Locally

To run the application locally and access it in your brower, first set the ```PORT``` environment variable to a value of your choice. e.g.

```
export PORT=8080
```

After the ```PORT``` environment variable has been set, run the Node.js application with the command below.

```
node server.js
```

The application will now be running locally on ```PORT```, in this case, the port is 8080. You can then access it locally from your browser at the URL ```localhost:PORT```, in this case ```localhost:8080```.
