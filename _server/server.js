"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var http = require("http");
var path = require("path");
var api = require("./routes/api");
var cors = require("cors");

var app = express();

app.set("port", process.env.PORT || 9000);
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, DELETE");
  next();
});

// JSON API

/**
 * Introductions
 */
app.get("/api/intros", api.getIntros);
app.get("/api/intros/:id", api.getIntro);
app.put("/api/intros/:id", api.updateIntro);


/**
 *  Skills
 */
app.get("/api/skills", api.getSkills);
app.put("/api/skills/:id", api.updateSkill);
app.post("/api/skills", api.addSkill);
app.delete("/api/skills/:id", api.deleteSkill);


app.listen(app.get("port"), function() {
  console.log("✔Express server listening on http://localhost:%d/", app.get("port"));
});
