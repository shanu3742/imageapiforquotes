const express = require("express");
const app = express();
const port = process.env.PORT||7090;
const importdata = require("./image.json");
app.get("/", (req,res) => {
    res.send(importdata);
})

app.listen(port, () => {
    console.log("connection is done");
})