const express = require("express");
const app = express();
const port = 8001;

// (1)
app.get("/", function (req, res) {
  res.send(`alert("codingSalon")`);
});

// (2)
app.get("/d", function (req, res) {
  res.sendFile(__dirname + "./");
});

app.use(express.static("public"));

app.listen(`${port}`, () => {
  console.log(`http://localhost:${port}`);
});
