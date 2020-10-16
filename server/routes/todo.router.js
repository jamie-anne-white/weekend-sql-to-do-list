// Require express
const express = require('express');
const app = express();
// Require body-parser
const bodyParser = require('body-parser');

// Route to DB
const todoRouter = require('./routes/todo.router')

const PORT = 5000;


// Static files
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//ROUTES
app.use('/todo', todoRouter)



// Start up on the server
app.listen(PORT, () => {
  console.log('listening on PORT', PORT);
});