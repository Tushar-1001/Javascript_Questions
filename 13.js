
var fs = require('fs');
const path = require('path');




fs.readFile('input.json', 'utf8', function(err, saveUserData){
    // Display the file content
    const data = JSON.parse(saveUserData)
    console.log(data.name);
  });