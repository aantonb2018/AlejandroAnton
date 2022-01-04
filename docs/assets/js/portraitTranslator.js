$(document).ready(function(){
    $.getJSON('./assets/language/es.json', function(data) { 
      $("<span>" + data.home + "</span>").appendTo("#homeMenu");
      $("<span>" + data.home + "</span>").appendTo("#homeText");
      $("<span>" + data.about + "</span>").appendTo("#aboutMenu");
      $("<span>" + data.resume + "</span>").appendTo("#resumeMenu");
      $("<span>" + data.portfolio + "</span>").appendTo("#portfolioMenu");
      $("<span>" + data.contact + "</span>").appendTo("#contactMenu");
      $("<h3>" + data.projectInfo + "</h3>").appendTo("#projInfo");
      $("<ul><li><strong>" + data.projCategory + "</strong>" + data.portraitCategory + "</li><li><strong>" + data.projRole + "</strong>" + data.portraitRole + "</li>"+ "</li><li><strong>" + data.projEngine + "</strong>" + data.portraitEngine + "</li>"+ "</li><li><strong>" + data.projLanguage + "</strong>" + data.portraitLanguage + "</li>"+ "</li><li><strong>" + data.projDate + "</strong>" + data.portraitDate + "</li>" + "</li><li><strong>" + data.projUrl + "</strong> <a href=\"https://sayotito.itch.io/juliettes-portrait\" target=\"_blank\">Juliette's Portrait</a></li></ul>").appendTo("#projInfo");
      $("<p>" + data.portraitDesc + "</p>").appendTo("#projDesc");
    });
    console.log("Ya he escrito test");
});