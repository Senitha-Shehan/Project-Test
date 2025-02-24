console.log("HI");
//7pJUztyFsQcRkag8

const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use("/",(req,res,nexxt) => {
    res.send ("It is working");
})

mongoose.connect("mongodb+srv://senitha200109:7pJUztyFsQcRkag8@cluster0.kt3bt.mongodb.net/")
.then (()=> console.log("Connected to DB"))
.then(() => {
    app.listen(5000);
})

.catch((err) => console.log(err))