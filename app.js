const express = require('express'); //require express

const app = express();




app.use('/static', express.static('public')); //serve a static files sush as images,cssfiles, and js

app.get('/', (req, res) => {  // create a route an use callback function
    res.sendFile(__dirname + '/index.html');

});

app.get('/submission', (req, res) => {
    res.sendFile(__dirname + '/public/submission.html');
})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/public/signup.html');
})






app.listen(3000);  // start the applocation at the port 8080

