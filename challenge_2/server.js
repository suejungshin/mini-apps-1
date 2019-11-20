const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, 'client')))

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// Write a single line for the CSV file
const objToTextline = function (obj) {
  let textline = '';
  let keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] !== "children") {
      textline += obj[keys[i]];
      if (i < keys.length - 2) {
        textline += ','
      }
    }
  }
  textline = textline + '\n'
  return textline;
}

// Write all the lines for the CSV file - I haven't fixed the issue with possibly different properties across all the objects
const allObjsToText = function (outermostObj) {
  let resultTextLines = '';
  let keys = Object.keys(outermostObj);
  for (let i = 0; i < keys.length; i++) {
    resultTextLines += keys[i];
    if (i < keys.length -1) {
      resultTextLines += ','
    }
  }
  resultTextLines += '\n';
  resultTextLines += objToTextline(outermostObj);
  const checkChildren = function (currentObj) {
   // console.log(currentObj)
    if (currentObj.children.length > 0) {
      for (let i = 0; i < currentObj.children.length; i++) {
        resultTextLines += objToTextline(currentObj.children[i]);
        checkChildren(currentObj.children[i]);
      }
    }
  }
  checkChildren(outermostObj)
  return resultTextLines;
}

// Make the CSV file
const createCSV = function (jsonText, callback) {

  let inputObj = JSON.parse(jsonText);
  let dataToWrite = allObjsToText(inputObj);

  fs.writeFile('result.csv', dataToWrite, 'utf8', (err) => {
    if (err) {
      // do something meaningful
    } else {
      callback();
    }
  })
}

app.post('/data', (req, res) => {
  createCSV(req.body.inputText, ()=> {
    res.sendFile(path.join(__dirname, 'result.csv'))
  });
});


// first do the case where all the properties match
// later fix for fact that children may match each other but not the parent in some cases

let testObj=
{
    "firstName": "Joshie",
    "lastName": "Wyattson",
    "county": "San Mateo",
    "city": "San Mateo",
  "role": "Broker",
  "sales": 1000000,
  "children": [
  {
    "firstName": "Beth Jr.",
    "lastName": "Johnson",
    "county": "San Mateo",
    "city": "Pacifica",
    "role": "Manager",
    "sales": 2900000,
    "children": [
      {
        "firstName": "Smitty",
        "lastName": "Won",
        "county": "San Mateo",
        "city": "Redwood City",
        "role": "Sales Person",
        "sales": 4800000,
        "children": []
      },
      {
        "firstName": "Allen",
        "lastName": "Price",
        "county": "San Mateo",
        "city": "Burlingame",
        "role": "Sales Person",
        "sales": 2500000,
        "children": []
      }
    ]
  },
  {
    "firstName": "Beth",
    "lastName": "Johnson",
    "county": "San Francisco",
    "city": "San Francisco",
    "role": "Broker/Sales Person",
    "sales": 7500000,
    "children": []
  }
]
};