

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomCrystalInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var targetNumber = getRandomInt(19,120);

  $("#number-to-guess").text(targetNumber);

  for (var i = 0; i < 4; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "./assets/images/crystal-1685590__480.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.

    var crystalNumber = getRandomCrystalInt(1,12);
    imageCrystal.attr("data-crystalvalue", crystalNumber);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }