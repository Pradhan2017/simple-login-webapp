"use strict"

$(document).ready(function () {
  var resultList = $("#resultList");    //document.getElementById("results")
  resultList.text("Injected using jquery(Please login to see all courses)");

  var toggleButton = $("#toggleButton");
  toggleButton.on("click", function () {
      console.log("Button clicked");
      resultList.toggle(500);

      if(toggleButton.text() ==="Hide"){
        toggleButton.text("Show");
      } else{
         toggleButton.text("Hide");
      }
  });

    var mika = [];

  function displayMika(mika) {
    resultList.empty();

      $.each(mika, function(i, item){
         var newResult = $("<div class='result'>" +
             "<div class='title'>" + item.title + "</div>" +
               "<div>" + "Level : " + item.level + "</div>" +
               "<div>" + "Totle Videos : " + item.total_videos + "</div>" +
               "<div>" + "Instructor : " + item.instructor + "</div>" +
               "</div>");

         resultList.append(newResult);

         newResult.hover(function () {
             $(this).css("background-color", "lightgrey");
             $(this).css("color", "darkblue");
             $(this).css("border-color", "blue");
         }, function () {
              $(this).css("background-color", "transparent");
              $(this).css("color", "black");
              $(this).css("border-color", "#999");
         }
       )

      });
    }

    $("#loginForm").on("submit", function () {
      var username = $("#username").val();
      var password = $("#password").val();

      if (username && password) {
        $.post("/api/login", {}, function (data) {
            console.log("Success :: " + data);
            displayMika(data);
            $("#loginForm").hide();
            $("#logoutSection").show();
            $("#errorMsg").empty();
        })
        .fail(function (data) {
            $("#errorMsg").text("Something BAD happened!")
        })
        .done(function () {

        })
      } else {
         $("#errorMsg").text("Username and Password are mandatory.")
      }

       return false;
    });

     $("#logoutButton").on('click', function () {
        $("#loginForm").show();
        $("#logoutSection").hide();
        resultList.empty();
        resultList.text("Please login to see all courses")
     })

});
