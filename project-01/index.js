const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs')

const app = express();
const PORT = 8000;

// Routes

// REST API
app.get("/api/users", (req, res) => {                       // pre appending api
    return res.json(users);
});

// HTML Document render
app.get("/users", (req, res)=>{
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")};
    </ul>
    `;
    res.send(html);
})

// app.get("/api/users/:id", (req, res) => {                   // :id => Dynamic Path Parameter
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id===id);

//     return res.json(user);
// })

// Middleware - Plugin
app.use(express.urlencoded({extended : false}));

app.post("/api/users", (req, res) => {
    // TODO create new user
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({status:"success", id:users.length});
    })
    return res.json({status: "pending"});
});

// app.patch("./api/users/:id", (req, res) => {
//     // TODO edit user with id
//     return res.json({status: "pending"});
// })

// app.delete("./api/users/:id", (req, res) => {
//     // TODO delete user with id
//     return res.json({status: "pending"});
// })


// IF THE ROUTE IS SAME WE CAN USE

app.route("/api/users/:id")
.get((req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id===id);
    return res.json(user);
})
.patch((req, res) => {
    // edit user
    return res.json( {status : "Pending"} );
})
.delete((req, res) => {
    // edit user
    return res.json( {status : "Pending"} );
})

app.listen(PORT, () => console.log("Server Started at port : "+PORT));