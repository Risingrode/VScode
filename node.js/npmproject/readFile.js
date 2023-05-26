const fs = require("fs");

fs.readFile("hellow.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})