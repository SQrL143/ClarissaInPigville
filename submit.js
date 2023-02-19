//create a route to handle the form submission

// Path: submit.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const port = process.env.PORT || 3000;
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

app.listen(port);
