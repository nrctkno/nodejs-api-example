const http = require('http');
const fs = require('fs');
const hostname='localhost';
const port=3000;

const server = http.createServer((req, res) => {
    //console.log(req.method, req.url, 'aaa')
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('view/index.html', (err,data) => {
        if(err) {
            console.log(err)
            res.end()
        } else {
            res.statusCode=200;
            res.end(data);
        }
    })
    //you should not write anything else in the res object here, it'll override the values specified above
})

server.listen(port, hostname, () => {
    console.log(`listening on port ${port}`)
});