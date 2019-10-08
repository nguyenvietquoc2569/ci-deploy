const express = require('express')
var bodyParser = require('body-parser')
// use in your express app
let app = express();
app.use(bodyParser.json()); // must use bodyParser in express
app.use(bodyParser.urlencoded({ extended: true }));

// Now could handle following events
app.post("/webhook", function (req, res) {
  let payload = (JSON.parse(req.body.payload))

  if ()
  // if (branch.indexOf('master') > -1 && sender.login === githubUsername) {
  //   // deploy(res);
  // }
})

app.listen(1555, '0.0.0.0')