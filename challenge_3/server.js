const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

// Middleware body parser
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})

app.use('/static', express.static(path.join(__dirname, 'public')));


const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'plantlife',
  database: 'checkout'
});

connection.connect();

app.post('/data', (req, res) => {
  let valuesArray = Object.values(req.body);
  let valuesQuery = '';
  for (let i = 0; i < valuesArray.length; i++) {
    valuesQuery += "'" + valuesArray[i] + "',";
  }
  let valuesString = JSON.stringify(valuesQuery).substring(1, valuesQuery.length);

  let queryText = `INSERT INTO transactions (${Object.keys(req.body).toString()}) VALUES (${valuesString})`

  connection.query(queryText, (err, result) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(`Successfully posted your data: ${result}`)
    }
  })
})


