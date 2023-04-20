const express = require("express");
const session = require("express-session");
const app = express();

app.use(
  session({
    secret: "mySecretKey", // change this to your own secret key
    resave: false,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");

// Define routes here

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  // const { username, password } = req.body;
  console.log("hi, login");
  // console.log(req.body.username);
  const username = res.body.username;
  const password = res.body.password;
  // const username = "admin";
  // const password = "852456";
  console.log(username, password);

  // Check if the credentials are correct
  if (username === "admin" && password === "852456") {
    res.redirect("/index");
  } else {
    res.redirect("/login");
  }
});

app.listen(3000, () => console.log("Server started on port 3000"));
