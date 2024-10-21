// linking JS to HTML
console.log("JS file is connected");

function generateMadLibs() {
    // coded values 
    let noun = getInputValue("noun");
    let verb = getInputValue("verb");
    let adjective = getInputValue("adjective");
    let place = getInputValue("place");
    let animal = getInputValue("animal");

    // create a mad libs sentence??
    let madLibsSentence = `Once upon a time, a ${adjective} ${noun} decided to ${verb} at the ${place} with a ${animal}.`;

    // Update the <p> tag with the id of 'mad-libs'
    document.getElementById("mad-libs").textContent = madLibsSentence;
}

// Create getinput function
function getInputValue(id) {
    return document.getElementById(id).value;
}
