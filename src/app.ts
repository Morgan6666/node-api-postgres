const express = require("express")
const bodyParser = require("body-parser")

const app = express();
const hpp = require("hpp");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use(hpp());
app.use("/api", require("./api/routes"));


export = app;
