# Learning process

## Course

https://www.udemy.com/course/create-nodejs-app-with-express-socket-io-and-mongodb/


## Initial notes

`global` is equivalent to `window` object.


## Running an application

```
node server
```

Which starts the application from server.js.

--- 

Using `nodemon`: nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

```
sudo npm install -g nodemon
nodemon server
```

## Modules

Importing and using modules:

```js
/*data.js*/
const users = [{"name": "Michael"},{"name": "Lindsay"}];
const nums = [1,2,3];
module.exports = {users,nums}

/*server.js*/
//using destructured syntax
const {users, nums} = require('./data'); //
console.log(nums);
```

## File system
```js
const fs = require('fs') //importing filesystem

//reading

fs.readFile('./data/note.txt', (err,data)=>{
    if(err) {
        console.log(err)
    }else{
        console.log(data.toString())
    }
})

//writing / appending

//fs.writeFile('./data/note.txt', 'yesss',(err,data)=>{
fs.appendFile('./data/note.txt', 'yesss\r\n',(err,data)=>{
    if(err) {
        console.log(err)
    }else{
        console.log('file saved')
    }
})

//directories

if (!fs.existsSync('./data3')) { //also valid for files
    fs.mkdir('./data3', (err,data)=>{ //opposite:rmdir, for files:unlink
        if(err) {
            console.log(err)
        }else{
            console.log('file saved')
        }
    })    
} else {
    console.log('folder exists')
}

```

### Streams

```js
const fs = require('fs');
const { Stream } = require('stream');

const readStream=fs.createReadStream('./data/largefile.txt', {encoding:'utf-8'});
/*
readStream.on('data', chunk => {
    console.log('-----new chucnk-----');
    console.log(chunk);
})
*/

const writeStream=fs.createWriteStream('./data/written.txt', {encoding:'utf-8'});
/*
readStream.on('data', chunk => {
    
    console.log('-----new chucnk-----');
    console.log(chunk);
    writeStream.write('\n ---- adding text ----')
    writeStream.write(chunk);
})
  */

readStream.pipe(writeStream);
```

## Basic server

```js
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>hello there</h1>');
    res.end();
})

const hostname='localhost';
const port=3001;
server.listen(port, hostname, () => {
    //console.log(`listening on port ${port}`)
});
```

### Rendering files

```js
...

const server = http.createServer((req, res) => {
    console.log(req.method, req.url)

    res.setHeader('Content-Type', 'text/html');
    fs.readFile('view/index.html', (err,data) => {
        if(err) {
            console.log(err)
            res.end()
        } else {
            res.statusCode=200
            res.end(data)
        }
    })
})

...
```