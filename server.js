const express = require('express');
const { request } = require('http');
const app = express();



const path = require('path');
console.log('path.join'),
    console.log(path.join(__dirname, 'public'));



app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.get('/contact', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'contact.html'))
});

app.get('/links', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'links.html'))
});
app.get('/about', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'about.html'))
});


app.listen(5000, () => {
    console.log("App is listening on port 5000")
});