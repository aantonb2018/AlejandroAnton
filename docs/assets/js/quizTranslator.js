$(document).ready(function(){
    $.getJSON('./assets/language/es.json', function(data) { 
      $("<span>" + data.home + "</span>").appendTo("#homeMenu");
      $("<span>" + data.home + "</span>").appendTo("#homeText");
      $("<span>" + data.about + "</span>").appendTo("#aboutMenu");
      $("<span>" + data.resume + "</span>").appendTo("#resumeMenu");
      $("<span>" + data.portfolio + "</span>").appendTo("#portfolioMenu");
      $("<span>" + data.contact + "</span>").appendTo("#contactMenu");
      $("<h3>" + data.projectInfo + "</h3>").appendTo("#projInfo");
      $("<ul><li><strong>" + data.projCategory + "</strong>" + data.quizCategory + "</li><li><strong>" + data.projRole + "</strong>" + data.quizRole + "</li>"+ "</li><li><strong>" + data.projEngine + "</strong>" + data.quizEngine + "</li>"+ "</li><li><strong>" + data.projLanguage + "</strong>" + data.quizLanguage + "</li>"+ "</li><li><strong>" + data.projDate + "</strong>" + data.quizDate + "</li>" + "</li><li><strong>" + data.projUrl + "</strong> <a href=\"https://sirallanberg.itch.io/quiz-de-anime-super-turbo-championship-edition\" target=\"_blank\">Quiz de Anime</a></li></ul>").appendTo("#projInfo");
      $("<p>" + data.quizDesc + "</p>").appendTo("#projDesc");
    });
    console.log("Ya he escrito test");
});