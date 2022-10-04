const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
var cors = require('cors');


const app = express();

app.get('/uploads/:id', (req, res) => {
    res.sendFile(path.join(__dirname, `./assets/${req.params.id}`));
  });
  
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(cors());

app.listen(3001, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on PORT ${3001}`);
  }
});
