// create functions for express and fileSystem, this will allow them to interact with the front end code
const path = require("path");
const express = require("express");
const fs = require("fs");
const PORT = process.env.PORT || 3001;
const app = express();
const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
// get notes.html and return data from the html to generate
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// get index.html and return data inside the file
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// read the db.json file and return all of the saved notes as JSON files
app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/db/db.json"));

  readTextFile("/Develop/db/db.json", function (text) {
    const dbData = db.jason(text);
    console.log(dbData);
  });
});

app.listen(PORT, () => console.log(3001));
