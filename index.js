let express = require('express');
let app = express();
let ejs = require('ejs');
const stories = require('./story.json');
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {stories: stories});
});

app.listen(port);

//create additional routes for an admin page to manage the images and stories

// Path: admin.js
let express = require('express');
let app = express();
let ejs = require('ejs');
const stories = require('./story.json');
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('admin', {stories: stories});
});

app.listen(port);

//create a route to handle the form submission

// Path: submit.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  let storyObject = {
    title: req.body.title,
    story: req.body.story,
    image: req.body.image
  }
  let storyJSON = JSON.stringify(storyObject);
  fs.writeFile('story.json', storyJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    res.send('Thank you for submitting your story!');
  });
});

app.listen(3000);

//create a route to handle the form submission

// Path: story.json
{
  "title": "My Story",
  "story": "This is my story.",
  "image": "image.jpg"
}

// Path: index.ejs
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Story Time</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Story Time</h1>
    <h2>Stories</h2>
    <% for(let i = 0; i < stories.length; i++) { %>
      <h3><%= stories[i].title %></h3>
      <p><%= stories[i].story %></p>
      <img src="<%= stories[i].image %>">
    <% } %>
  </body>
</html>

// Path: admin.ejs
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Story Time</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h