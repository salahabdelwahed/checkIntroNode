//task1

console.log("HELLO WORLD");

//task2
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


//task 3 

const fs = require('fs');


fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File "welcome.txt" created successfully!');
    }
});


fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('Data read from welcome.txt:', data);
    }
});
