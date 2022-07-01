var fs = require('fs');
const path = require('path');

var data = {
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda'
}

fs.writeFile ("input.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);

fs.readFile('input.json', 'utf8', function(err, saveUserData){
    // Display the file content
    const data = JSON.parse(saveUserData)
    console.log(data.name);
  });




let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
 
fs.writeFileSync(path.resolve(__dirname, 'student.json'), JSON.stringify(student));
