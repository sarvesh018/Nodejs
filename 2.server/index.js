const http = require('http');
const fs = require('fs');
const url = require('url')

/*
Create Server using inbuilt http package
it will expect one callback with parameters req & res
*/
const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") {return (res.end())};                // it will not log the url with /favicon.ico

    const myUrl = url.parse(req.url);                                   // parsing url using url package
    console.log(myUrl);
                                                                                        
    const log = (`${Date.now()} : ${req.method} : ${req.url} : New Request\n`);         // creating a log file // req.method => helps to get the query (GET, POST)
                                                                                        
    fs.appendFile("log.txt", log, (err, data) => {                      // sync appending data into file
        switch(myUrl.pathname){                                         // callback will give the result after appending the log
            case '/':
                res.end("Home Page");
                break;
            case '/about':
                const username = myUrl.query.myname;                    // from url username can be taken
                res.end(`Hi ${username}\n`);
                break;
            case '/signup':
                if(req.method == "GET"){
                    res.end("Sign up Form");
                }
                else if(req.method == "POST"){
                    res.end("Success!!");
                }
            default:
                res.end("404 Not Found");
        }
    });
});

/*
listen is used to connect to the port in the localhost
*/
myServer.listen(8000, () => {console.log("Server Connected!")});