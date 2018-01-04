var express = require('express');
var app = express();

var port = 3000;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('Server started at' + port);

app.post('/api/login', function (req, res) {
  var mika = [{
    title: "C",
    instructor:"Saurabh",
    level:"Beginner",
    total_videos:26
  },{
    title: "C++",
    instructor:"Saurabh",
    level:"Beginner",
    total_videos:31
  },{
    title: "Java",
    instructor:"Saurabh",
    level:"Beginner",
    total_videos:38
  },{
    title: "PHP",
    instructor:"Shahid",
    level:"Beginner",
    total_videos:56
  }];

  res.json(mika);

})
