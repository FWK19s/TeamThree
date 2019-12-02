const express = require('express'); //require express

const app = express();




app.use('/static', express.static('public')); //serve a static files sush as images,cssfiles, and js

app.get('/', (req, res) => {  // create a route an use callback function
    res.sendFile(__dirname + '/index.html');

});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/form.html');
})






app.listen(3000);  // start the applocation at the port 8080

