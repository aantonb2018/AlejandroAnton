$(document).ready(function(){
    console.log("Voy a escribir test");
    $.getJSON('/assets/language/es.json', function(data) { 
      $("<span>" + data.home + "</span>").appendTo("#homeMenu");
      $("<span>" + data.home + "</span>").appendTo("#homeText");
      $("<span>" + data.about + "</span>").appendTo("#aboutMenu");
      $("<span>" + data.resume + "</span>").appendTo("#resumeMenu");
      $("<span>" + data.portfolio + "</span>").appendTo("#portfolioMenu");
      $("<span>" + data.contact + "</span>").appendTo("#contactMenu");
      $("<h3>" + data.projectInfo + "</h3>").appendTo("#projInfo");
      $("<ul><li><strong>" + data.projCategory + "</strong>" + data.penguinCategory + "</li><li><strong>" + data.projRole + "</strong>" + data.penguinRole + "</li>"+ "</li><li><strong>" + data.projEngine + "</strong>" + data.penguinEngine + "</li>"+ "</li><li><strong>" + data.projLanguage + "</strong>" + data.penguinLanguage + "</li>"+ "</li><li><strong>" + data.projDate + "</strong>" + data.penguinDate + "</li>" + "</li><li><strong>" + data.projUrl + "</strong> <a href=\"https://sirallanberg.itch.io/annoying-penguins\" target=\"_blank\">Annoying Penguins</a></li></ul>").appendTo("#projInfo");
      $("<p>" + data.penguinDesc + "</p>").appendTo("#projDesc");
    });
    console.log("Ya he escrito test");
});