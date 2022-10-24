const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
var cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();



app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(cors());

app.get('/bundles/:id', (req, res) => {
    res.sendFile(path.join(__dirname, `./assets/${req.params.id}`));
    //res.send("dsdsdsdsdsdsdsdssdsdsdsd");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on PORT ${PORT}`);
  }
});