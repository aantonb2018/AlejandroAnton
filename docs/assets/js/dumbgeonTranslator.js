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
      $("<ul><li><strong>" + data.projCategory + "</strong>" + data.dumbgeonCategory + "</li><li><strong>" + data.projRole + "</strong>" + data.dumbgeonRole + "</li>"+ "</li><li><strong>" + data.projEngine + "</strong>" + data.dumbgeonEngine + "</li>"+ "</li><li><strong>" + data.projLanguage + "</strong>" + data.dumbgeonLanguage + "</li>"+ "</li><li><strong>" + data.projDate + "</strong>" + data.dumbgeonDate + "</li>" + "</li><li><strong>" + data.projUrl + "</strong> <a href=\"https://salmorejito-games.itch.io/tales-of-the-dumbgeon\" target=\"_blank\">Tales of the Dumbgeon</a></li></ul>").appendTo("#projInfo");
      $("<p>" + data.dumbgeonDesc + "</p>").appendTo("#projDesc");
    });
    console.log("Ya he escrito test");
});