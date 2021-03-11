const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/bmicalculator", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    //var result = weight / (height * height);
    var result = weight / Math.pow(height, 2);

    res.send("Your BMI is " + result.toFixed(2) + '<a href="/"> Link </a>');    

} );

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});

