var http = require('http');

const myModule = require('.Modules/logger');
const { json } = require('stream/consumers');

let port = 8080;

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type':'application/json'});
    // res.end('Hello World ');
    myModule.log(new Data() , req, headers, myModule)
    res.end(JSON.stringify({ name : 'Amir', last: 'Donyaei'}))




}).listen(port);

console.log(port);