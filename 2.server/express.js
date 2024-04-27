// express can also handle url's, we don't need url package in express

const express = require("express")

const app = express();                              // it is request handler (handle routes)

app.get('/', (req, res) => {
    return res.end("Hello From Home Page");
});

app.get('/about', (req, res) => {
    return res.end(`I am ${req.query.name}`);
})

// app will handle all the requests, makes code more clean
// const myServer = http.createServer(app);            
// myServer.listen(8000, () => console.log("Server Started!!"));

// alternative for above http code
app.listen(8000, () => {console.log("Server Started!!")});