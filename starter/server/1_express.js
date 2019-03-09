const express = require("express");
const app = express();
const port = 3000; // Change this if necessary

//
// Basic constant response
//
const getCallback = (req, res) => {
  res.send("weird flex but ok");
};
// Support http://localhost:3000/itworks
app.get("/itworks", getCallback);

//
// File server
//

// Parameters start with colons. The pattern below will support paths like
// /files/1_express.js.
app.get("/files/:filename", (req, res) => {
  const { filename } = req.params;
  res.sendFile(filename, { root: "." });
});
// Equivalent using Express middleware:
// app.use('/files', express.static('.'))

app.listen(port, () => console.log(`Listening ${port}`));
