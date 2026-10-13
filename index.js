import express from "express";
import ejs from "ejs";

const SERVER_PORT = 3000; 

var app = express();

app.set("view engine", "ejs");

// ---- Middleware Settings ----
// Express's bodyparser
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(SERVER_PORT, () => {
    console.log("SERVER LISTENING ON PORT " + SERVER_PORT);
});