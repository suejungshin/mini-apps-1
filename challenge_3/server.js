const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello world!!!');
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})

app.use('/static', express.static(path.join(__dirname, 'public')));


app.post('/data', (req, res) => {
  console.log(req.body)
  res.status(200).send();
})