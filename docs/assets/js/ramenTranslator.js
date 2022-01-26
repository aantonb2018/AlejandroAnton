$(document).ready(function(){
    $.getJSON('./assets/language/es.json', function(data) { 
      $("<span>" + data.home + "</span>").appendTo("#homeMenu");
      $("<span>" + data.home + "</span>").appendTo("#homeText");
      $("<span>" + data.about + "</span>").appendTo("#aboutMenu");
      $("<span>" + data.resume + "</span>").appendTo("#resumeMenu");
      $("<span>" + data.portfolio + "</span>").appendTo("#portfolioMenu");
      $("<span>" + data.contact + "</span>").appendTo("#contactMenu");
      $("<h3>" + data.projectInfo + "</h3>").appendTo("#projInfo");
      $("<ul><li><strong>" + data.projCategory + "</strong>" + data.ramenCategory + "</li><li><strong>" + data.projRole + "</strong>" + data.ramenRole + "</li>"+ "</li><li><strong>" + data.projEngine + "</strong>" + data.ramenEngine + "</li>"+ "</li><li><strong>" + data.projLanguage + "</strong>" + data.ramenLanguage + "</li>"+ "</li><li><strong>" + data.projDate + "</strong>" + data.ramenDate + "</li>" + "</li><li><strong>" + data.projUrl + "</strong> <a href=\"https://sirallanberg.itch.io/learn-with-ramen\" target=\"_blank\">Learn With Ramen</a></li></ul>").appendTo("#projInfo");
      $("<p>" + data.ramenDesc + "</p>").appendTo("#projDesc");
    });
    console.log("Ya he escrito test");
});