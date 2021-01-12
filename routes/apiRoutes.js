// Dependencies
var fs = require("fs");
var data = require("../db/db.json");

// Routing
module.exports = function(app) {

  // API GET Requests
  app.get("/api/notes", function(req, res) {
    res.json(data);
  });

  // API POST Requests
  app.post("/api/notes", function (req, res) {
    data.push(req.body);
    data.forEach((note, i) => {
      note.id = i + 1;
    });

    fs.writeFile("./db/db.json", JSON.stringify(data), function () {
        res.json(data);
    });
  });

  // API DELETE Requests
  app.delete("/api/notes/:id", function (req, res) {
    var id = req.params.id;
    data.splice(id - 1, 1);
    data.forEach((note, i) => {
        note.id = i + 1;
    });

    fs.writeFile("./db/db.json", JSON.stringify(data), function () {
        res.send(data);
    });
  });
};