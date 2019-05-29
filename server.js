var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

var router = express.Router();

app.use(express.static(__dirname + "../Public"));

app.use(router);

app.listen(PORT, function () {
    console.log("Listening on port:" + PORT);
});