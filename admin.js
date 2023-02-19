let express = require('express');
let app = express();
let ejs = require('ejs');
const stories = require('./story.json');
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');

// create a route to handle the admin.ejs page
//explain this code block

app.get('/admin', (req, res) => {
    req.session.admin = true;
    req._construct = true;
    res.send('This is the admin page');

    res.render('admin', { stories: stories });
});

app.listen(port);
