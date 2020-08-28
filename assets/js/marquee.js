//Annotated code
var text = $(".switcher").attr("shift").replace(/\ /g, '•').toUpperCase().split(','); //Get words, sort out spaces, put to uppercase and make an array.
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789•".toUpperCase(); //allowed characters, case unspecific as it converts everything into uppercase.

var select = 0; //Which text is selected first
var length = Math.max.apply(Math, $.map(text, function (el) { return el.length })); //Length of longest string
var correct = 0; //Counter to see if all letters match
var selecttext = []; //Current held correct text
var fulltext = []; //Current held text, not always correct
var actualtext = ""; //Text displayed inside .switcher .display
var latch = true; //Just a fail safe to not skip a word

setInterval(flicker,40); //This is how fast the characters switch

write();
function write() {
  loadtext();
  for (var i = 0; i <length; i++) { //initiate fulltext with completely blank string
    fulltext[i] = "•";
  }
}

function loadtext() { //Fill selecttext with word and empty space padding •
  for (var i = 0; i <length; i++) {
    selecttext[i] = text[select][i];
    if (i >= text[select].length) {
      selecttext[i] = "•";
    }
  }
  latch = true; //open to check if words match
}
function flicker() { //Matching characters
  for (var i = 0; i < length; i++) { //cycle through letters
    if (selecttext[i] != fulltext[i]) { //does the varying character not match with the correct one
      if (fulltext[i] == "•") { //If it is at the end of the loop
        fulltext[i] = "A"; //Put to the beginning
      } else {
        fulltext[i] = chars[chars.indexOf(fulltext[i]) + 1]; //Increase character by 1
      }
      correct++; //means that the loop will not end this time around
    }
  }
  for (var i = 0; i < length; i++) { //Stitch characters into a word
    actualtext += fulltext[i];
  }
  if (latch) {
    $(".switcher").text(actualtext); //Display the word
  }
  actualtext = ""; //and blanket
  if (correct == 0 && latch) { //If there are no errors and it can latch
    latch = false; //can't latch
    if (select >= text.length-1) { //increment word by 1 or loop
      select = 0;
    } else {
      select++;
    }
    setTimeout(loadtext,1500); //start next word after a pause, this is where latch comes into play
  }
  correct = 0; //reset correct after it is used
}
