const dbConnect = require('./DatabaseConnections/dbConnect');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const RegisterUser = require('./APIs/RegisterUser');
const LoginUser = require('./APIs/LoginUser');
app.use(express.json())
dbConnect();

app.post('/register', (request, response) => {
    RegisterUser(request, response)
});

app.post('/login', (request, response) => {
    LoginUser(request, response)
});


server.listen(5000, () => {
    console.log('Server up!');
});

