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
      $("<ul><li><strong>" + data.projCategory + "</strong>" + data.galacticCategory + "</li><li><strong>" + data.projRole + "</strong>" + data.galacticRole + "</li>"+ "</li><li><strong>" + data.projEngine + "</strong>" + data.galacticEngine + "</li>"+ "</li><li><strong>" + data.projLanguage + "</strong>" + data.galacticLanguage + "</li>"+ "</li><li><strong>" + data.projDate + "</strong>" + data.galacticDate + "</li>" + "</li><li><strong>" + data.projUrl + "</strong> <a href=\"https://sirallanberg.itch.io/quiz-de-anime-super-turbo-championship-edition\" target=\"_blank\">Galactic Defenders</a></li></ul>").appendTo("#projInfo");
      $("<p>" + data.galacticDesc + "</p>").appendTo("#projDesc");
    });
    console.log("Ya he escrito test");
});