const http = require('http');
const fs = require('fs');

/*
Create Server using inbuilt http package
it will expect one callback with parameters req & res
*/
const myServer = http.createServer((req, res) => {

    const log = (`${Date.now()} : ${req.url} : New Request\n`);       // creating a log file

    fs.appendFile("log.txt", log, (err, data) => {                  // sync appending data into file
        switch(req.url){                                            // callback will give the result after appending the log
            case '/':
                res.end("Home Page");
                break;
            case '/about':
                res.end("I am Sarvesh");
                break;
            default:
                res.end("404 Not Found");
        }
    });
});

/*
listen is used to connect to the port in the localhost
*/
myServer.listen(8000, () => {console.log("Server Connected!")});