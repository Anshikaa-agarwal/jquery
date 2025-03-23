fs = require('fs')

fs.readFile('file1.txt', 'utf8', (err, data) => {
    if(err) console.log(err);

    const upc = data.toUpperCase();

    fs.writeFile('output.txt', upc, (err, data) => {
        if(err) throw err;

    })
})