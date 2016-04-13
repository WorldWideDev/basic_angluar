var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));

app.get("/", function (request, response){
    request.render('index.html')
})

app.listen(3030, function() {
  console.log("listening on port 3030");
})
