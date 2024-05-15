const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs')
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;


// CONNECTION
mongoose
    .connect("mongodb://localhost:27017/project")          // it will return a promise
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.log("Mongo Error ", err));


// SCHEMA
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
});

// MODEL
const User = mongoose.model('user', userSchema);


// Middleware - Plugin
app.use(express.urlencoded({extended : false}));

app.post("/api/users", async(req, res) => {
    // TODO create new user
    const body = req.body;
    
    if(
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ){
        return res.status(400).json({msg: "All fields required"});
    }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName, 
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle,
    })

    console.log(result);

    return res.status(201).json({msg: "Success"});
});

app.get("/api/users", async (req, res) => {
    const dbUsers = await User.find({});

    const html = `
    <ul>
        ${dbUsers.map((user) => `<li>${user.firstName} - ${user.lastName}`).join("")}
    </ul>
    `;

    res.send(html);
})

app.route("/api/users/:id")
.get(async(req, res)=>{
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({status: "User not Found"});

    return res.json(user);
})
.patch(async(req, res) => {
    // edit user
    await User.findByIdAndUpdate(req)
    return res.json( {status : "Pending"} );
})
.delete((req, res) => {
    // edit user
    return res.json( {status : "Pending"} );
})

app.listen(PORT, () => `Server Started at port ${PORT}`);
