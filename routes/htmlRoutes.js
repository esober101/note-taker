// Dependencies
var path = require("path");

// Routing
module.exports = function(app) {
  
// HTML GET Requests
app.get("/notes", function(req, res) {
res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("*", function(req, res) {
res.sendFile(path.join(__dirname, "../public/index.html"));
});

};
