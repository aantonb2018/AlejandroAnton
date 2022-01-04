$(document).ready(function(){
    console.log("Voy a escribir test");
    $.getJSON('/docs/assets/language/es.json', function(data) { 
      $("<span>" + data.home + "</span>").appendTo("#homeMenu");
      $("<span>" + data.home + "</span>").appendTo("#homeText");
      $("<span>" + data.about + "</span>").appendTo("#aboutMenu");
      $("<span>" + data.resume + "</span>").appendTo("#resumeMenu");
      $("<span>" + data.portfolio + "</span>").appendTo("#portfolioMenu");
      $("<span>" + data.contact + "</span>").appendTo("#contactMenu");
      $("<h3>" + data.projectInfo + "</h3>").appendTo("#projInfo");
      $("<ul><li><strong>" + data.projCategory + "</strong>" + data.unfamousCategory + "</li><li><strong>" + data.projRole + "</strong>" + data.unfamousRole + "</li>"+ "</li><li><strong>" + data.projEngine + "</strong>" + data.unfamousEngine + "</li>"+ "</li><li><strong>" + data.projLanguage + "</strong>" + data.unfamousLanguage + "</li>"+ "</li><li><strong>" + data.projDate + "</strong>" + data.unfamousDate + "</li>" + "</li><li><strong>" + data.projUrl + "</strong> <a href=\"https://miniponti.itch.io/un-famous\" target=\"_blank\">Un-Famous</a></li></ul>").appendTo("#projInfo");
      $("<p>" + data.unfamousDesc + "</p>").appendTo("#projDesc");
    });
    console.log("Ya he escrito test");
});