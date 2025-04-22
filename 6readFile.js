const fs = require("fs")
fs.readFile("mark.txt", "utf-8", function(err, data){
    console.log(data);
})
fs.writeFile("mark.txt", "Hello this side mr Mark", function(err, data){
})