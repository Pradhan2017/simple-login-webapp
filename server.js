

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
