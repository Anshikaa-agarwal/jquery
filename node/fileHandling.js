const fs = require('fs')

//reading a file
fs.readFile('file1.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
})

//create file
fs.writeFileSync("file2.txt", "hello theree")