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