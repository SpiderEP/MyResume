const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));


app.get('index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('Experience', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Experience.html'));
});


app.get('About me', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'About me.html'));
});

app.get('Contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Contact.html'));
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});