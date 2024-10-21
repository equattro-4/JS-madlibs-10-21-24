//Have to coonect the Js file 
console.log("JavaScript is connected");

// the generate madlib Function 
function generateMadLibs {
    // input value
   
   
    var noun = document.getElementById("noun").value;
    var verb = document.getElementById("verb").value;
    var adjective = document.getElementById("adjective").value;
    var place = document.getElementById("place").value;
    var animal = document.getElementById("animal").value;

    // Create my Mad Libs sentence
    var madLibsSentence = "The " + adjective + " " + noun + " decided to " + verb + " at the " + place + " with a " + animal + ".";

   
