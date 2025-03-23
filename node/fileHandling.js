const fs = require('fs')

//reading a file sync
console.log(fs.readFileSync('file.txt', 'utf8'));

//reading file asynchrously
fs.readFile('file.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
})

//appendfile sync
fs.appendFileSync('file.txt', "hello content\n");

//append file async
fs.appendFile('file.txt', "new content added", (err, data) => {
    if(err) {
        console.log(err);
    }
});

//write file sync
fs.writeFileSync("file.txt", "yo")

//delete file
// fs.unlinkSync('file1.txt')

//rename file
fs.renameSync('file.txt', 'file.txt')
