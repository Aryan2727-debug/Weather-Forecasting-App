const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

const staticPath = path.join(__dirname , "../views");
const partialsPath = path.join(__dirname , "../partials");

app.set("views" , staticPath);

app.set("view engine" , "hbs");

hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get("" , (req , res) =>{
    res.render("index");
});

app.get("/about" , (req , res) =>{
    res.render("about");
});

app.get("/weather" , (req , res) =>{
    res.render("weather");
});

app.get("*" , (req , res) =>{
    res.render("404error" , {
        errorMsg : "Oops! Page Not Found."
    });
});

app.get("" , (req , res) =>{
    res.send("welcome to my page");
});

app.get("/about" , (req , res) =>{
    res.send("welcome to the about page");
});

app.get("/weather" , (req , res) =>{
    res.send("welcome to weather page");
});

app.get("*" , (req , res) =>{
    res.send("404 ERROR, can't find the page");
});

app.listen(80 , () =>{
    console.log("App started at Port 80");
});