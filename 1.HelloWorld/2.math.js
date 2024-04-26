function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

// to export these functions to different files
// we will use module.exports

// case 1
// module.exports = {
//     addFun: add, 
//     subFun: sub
// }

// case 2
module.exports = {
    add, sub
}

// case 3
// using exports object
// exports.add = (a, b) => a+b;
