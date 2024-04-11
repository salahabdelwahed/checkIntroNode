
const Password = require('generate-password');

const pass =Password.generate({
    length: 18,
    uppercase: true,
    numbers: true,
    symbols: true,
}) 
console.log("this is your password",pass)