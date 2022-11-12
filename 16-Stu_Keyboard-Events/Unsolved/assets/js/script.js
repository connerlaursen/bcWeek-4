function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  var keyValue=event.key;
  var keyCode=event.keyCode;
  document.querySelector("#key").innerHTML = keyValue;
  document.querySelector("#code").innerHTML = keyCode;
}








function keyupAction(event) {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}






document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);
// TODO: Add Event Listener for "keydown" event

