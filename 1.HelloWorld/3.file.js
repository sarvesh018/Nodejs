const fs = require("fs"); // in built package to create files

// Write in File

// sync...
// fs.writeFileSync("./text.txt", "New File Sync");

// async
// fs.writeFile("./text.txt", "New File Async", (err) => {}); // last part is a callback function

// Read from File
// sync
const result = fs.readFileSync("./text.txt", "utf-8"); // utf-8 is encoding standard for files
console.log("From sync operation: ", result);

// async
// it is void function it will not return anything
fs.readFile("./text.txt", "utf-8", (err, result) =>{
    if(err){
        console.log("Error: ", err);
    }
    else{
        console.log("From async operation: ", result);
    }
})

// append data in file
fs.appendFileSync("./text.txt", "Hey, I'm Sarvesh! \n");
fs.appendFileSync("./text.txt", `Time is : ${Date.now()} \n`);

// copy file
// fs.cpSync("./text.txt", "./copy.txt");

// delete a file
// fs.unlinkSync("./copy.txt");

// to see stats of a file
console.log(fs.statSync("./text.txt"));