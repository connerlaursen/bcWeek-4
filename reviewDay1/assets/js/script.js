var jsBody = window.document.body;
//create a new section and inside a section, create 2 p tags with contentå.
var newSection = window.document.createElement("section");
var pTagOne = window.document.createElement("p");
pTagOne.innerHTML="This is pTagOne";
var pTagTwo = window.document.createElement("p");
pTagTwo.innerHTML = "This is pTagTwo";
newSection.appendChild(pTagOne);
newSection.appendChild(pTagTwo);
jsBody.appendChild(newSection);
// add an element to a existing html tag. appendChild

var counter = 1;
var shouldStop=false
const myInterval = setInterval(function(){
    var newPTag = window.document.createElement("p");
    newPTag.innerHTML = "This is p tag" + counter;
    newSection.appendChild(newPTag);
    counter++;
    shouldStop =confirm("Do you want to stop?");
    if(shouldStop){
        clearInterval(myInterval);
    }
},2000);


