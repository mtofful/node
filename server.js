const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>hello express</h1>');
  res.render('home.hbs', {
    pageTitle: 'Home page.',
    year: 2014,
    welcomeMessage: 'Bienvenido eahh'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'About page.',
    year: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request.'
  });
});

app.get('/projects', (req, res) =>{
  res.render('projects.hbs', {
    id: 1,
    project: 'Trabajo Final',
    alumns: ['Matias', 'Aristides', 'Fede']
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
