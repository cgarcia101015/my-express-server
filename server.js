//jshint esversion:6

const express = require('express');

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at cgarcia101015@gmail.com");
});

app.get("/about", function(req, res) {
  res.send("<p>Hi! I'm a Full-Stack Developer specailizing in HTML, CSS, JavaScript and the MERN Stack.");
});

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Tea</ul></li><ul><li>Code</ul></li><ul><li>Beer</ul></li><ul><li>Camping</ul></li>");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
