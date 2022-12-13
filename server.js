const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));

// to serve from the production 'build' folder
app.use(express.static(path.join(__dirname, "build")));

// * Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log(`Express app running on port: ${PORT} ✔️`);
});