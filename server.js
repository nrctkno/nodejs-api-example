const http = require('http');
const fs = require('fs');
const moment = require('moment');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {

    console.log(moment().format('YYYY-MM-DD HH:mm:ss'), req.method, req.url)

    res.setHeader('Content-Type', 'text/html');
    fs.readFile('view/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.statusCode = 500;
            res.end()
        } else {
            res.statusCode = 200;
            res.end(data);
        }
    })
    //you should not write anything else in the res object here, it'll override the values specified above
})

server.listen(port, hostname, () => {
    console.log(`listening on port ${port}`)
});